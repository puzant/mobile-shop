//var app = angular.module("app.Auth");
//
//app.controller('signupCtrl', ["$scope", "$location", "UserService"] function($scope, $http, $location) {
//    
//    $scope.submit = function(user) {
//        $http.post('http://localhost:8000/auth/signup', user).then(function(res) {
//            $location.path('/login')
//        }, function(response) {
//            alert('there was problem in the operation' + response.data.message);
//        }); 
//    }
//    
//})


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