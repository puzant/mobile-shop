

var app = angular.module("app.Auth");

app.controller("signupCtrl", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.submit = function(user) {
        if(user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "password does not match";
        } else {
            UserService.signup(user).then(function(res) {
                $location.path('/login');
            }, function(res) {
                alert('there was a problem' + res.data);
            });
        }
    }
}]);
