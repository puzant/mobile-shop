var app = angular.module("app.Auth", []);

app.service("TokenService" , [function(token){
var userToken = "token";
  this.setToken = function(token){
      localStorage[userToken]= token;
  };

  this.getToken = function(){
      return localStorage[userToken];
  };

  this.removeToken = function() {
      localStorage.removeItem(userToken);
  };
}])

app.service("UserService", ["$http", "$location", "TokenService", function($http, $location, TokenService){
  this.signup = function(user){
    return $http.post('http://localhost:8000/auth/signup', user);
  };

  this.login = function(user){
    return $http.post('http://localhost:8000/auth/login', user).then(function(response) {
      TokenService.setToken(response.data.token);
      return response;
    });
  };
this.logout = function() {
    TokenService.removeToken();
    $location.path("/");
}

this.isAuthenticated = function(){
    return !!TokenService.getToken();
};


}])


app.service('AuthInterceptor', ["$q", "$location", "TokenService", function($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();

        if(token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function(res) {
        if(res.status = 401) {
            TokenService.removeToken();
            $location.path('/login');
        }
        return $q.reject(res);
    };

}]);

app.config(["$httpProvider", function($httpProvider){
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
