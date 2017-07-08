var app = angular.module("app.Auth", []);

app.service("TokenService" , [function(token){

  this.setToken = function(token){
      localStorage[userToken]= token;
  };

  this.getToken = function(token){
      localStorage[userToken];
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
