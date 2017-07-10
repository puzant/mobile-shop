var app = angular.module("app");

app.directive("navbar", ["UserService", function(UserService) {  
    return {
        templateUrl: "viewes/navbar/navbar.html",
        link: function(scope) {
            scope.UserService = UserService;
        }
    }
}]);