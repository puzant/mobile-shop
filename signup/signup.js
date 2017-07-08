var app = angular.module("app");

app.controller('signupCtrl', function($scope, $http, $location) {
    
    $scope.submit = function(user) {
        $http.post('http://localhost:8000/auth/signup', user).then(function(res) {
            $location.path('/login')
        }, function(response) {
            alert('there was problem in the operation' + response.data.message);
        }); 
    }
    
})
