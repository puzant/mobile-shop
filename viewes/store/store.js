//var app = angular.module("app");
//
//app.controller("storeCtrl", function($scope, $http) {
//    $http.get('http://localhost:8000/login').then(function(res) {
//        console.log(res.data);
//    })
//})

var app = angular.module("app");

app.controller("storeCtrl", function ($scope, $http) {
    // get data from the database
    $http.get('http://localhost:8000/api/mobile').then(function (res) {
        console.log(res.data); //the api object
        $scope.data = res.data;
    })

})
