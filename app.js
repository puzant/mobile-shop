var app = angular.module("app", ['ngRoute','app.Auth']);


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
        templateUrl: './signup/signup.html',
        controller: 'signupCtrl'
    })
    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: './viewes/contact/contact.html'
    })
});

