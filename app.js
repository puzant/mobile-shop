var app = angular.module("app", ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'homeCtrl',
        templateUrl: './viewes/home/home.html'
    });
});
