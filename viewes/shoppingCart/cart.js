var app = angular.module("app");

app.controller('cartCtrl', function ($scope, $http) {
    $http.get('http://localhost:8000/api/cart').then(function (res) {
        console.log(res.data);
//        $scope.cartIteme = res.data;
    })


})
