var app = angular.module("app", ['ngRoute','app.Auth']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'homeCtrl',
        templateUrl: './viewes/home/home.html'
    })
    .when('/login', {
        templateUrl: './login/login.html',
        controller:'loginCtrl'
    })
    .when('/signup', {
        templateUrl: './signup/signup.html',
        controller: 'signupCtrl'
    })
    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: './viewes/contact/contact.html'
    })
    .when('/logout', {
        controller:'LogoutController',
        template: ""
    })
        .when('/store', {
        templateUrl: "viewes/store/store.html",
        controller: "storeCtrl"
    })
    .when('/cart', {
        templateUrl: "viewes/shoppingCart/cart.html"
    })
});

