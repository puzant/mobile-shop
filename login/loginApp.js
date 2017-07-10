//var app = angular.module("app");
//
//app.controller('loginCtrl', function($scope) {
//
//$scope.login = function (user) {
//  $http.post("http://localhost/auth/login").then(function(res){
//      $location.path("/test")
//    },
//  function(response) {
//    alert('login succeed' + response.data.message);
//});
//}
//
//})



var app = angular.module("app.Auth");

app.controller('loginCtrl', ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.login = function(user) {
        UserService.login(user).then(function(res){
            $location.path('/store');
        }, function(res) {
            alert('there was error' + res.data);
        });
    };
}]);