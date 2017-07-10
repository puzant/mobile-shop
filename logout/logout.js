var app = angular.module("app");

app.controller("LogoutController", ["UserService", function (UserService) {  
    UserService.logout();
}]);