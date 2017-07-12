
var app = angular.module("app");

app.controller("storeCtrl", function ($scope, $http) {
    // get data from the database
    $http.get('http://localhost:8000/api/mobile').then(function (res) {
        console.log(res.data); //the api object
        $scope.data = res.data;
    })

   $scope.add =function(x) {
       $http.post('http://localhost:8000/api/cart', x._id).then(function(res) {
           alert('your item was added to the cart');
       }, function(err) {
           alert('there was error' + err);
       })
   }
})
