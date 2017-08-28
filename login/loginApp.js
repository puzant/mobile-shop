var app = angular.module("app.Auth");

app.controller('loginCtrl', ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.login = function(user) {
        UserService.login(user).then(function(res){
            $location.path('/store');
        }, function(res) {
            //alert('there was error' + res.data);
            alert('username or password is incorrect');
        });
    };
}]);
