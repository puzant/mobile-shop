var app = angular.module("app");

app.controller('loginCtrl', function($scope) {

$scope.login = function (user) {
  $http.post("http://localhost/auth/login").then(function(res){
      $location.path("/test")
    },
  function(response) {
    alert('login succeed' + response.data.message);
});
}

})
