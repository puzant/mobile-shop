var app = angular.module("app");

app.controller('cartCtrl', function ($scope, $http) {
    $http.get('http://localhost:8000/api/cart').then(function(res){
        console.log(res);
       $scope.data = res.data;
    })

    $scope.deleteItem = function (info) {
          $http.delete("http://localhost:8000/api/cart/" , info).then(function (res) {
              $http.get('http://localhost:8000/api/cart').then(function(res){
                $scope.data = res.data;
              });

          });
      };


})
