var app = angular.module("app", ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'homeCtrl',
        templateUrl: './viewes/home/home.html'
    })
    .when('/login', {
        templateUrl: './login/login.html'
    })
    .when('/signup', {
        templateUrl: './signup/signup.html'
    })
    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: './viewes/contact/contact.html'
    })
});
