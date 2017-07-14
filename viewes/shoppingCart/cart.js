var app = angular.module("app");

app.controller('cartCtrl', function ($scope, $http) {
    $http.get('/api/cart').then(function(res){
        console.log(res);
       $scope.data = res.data;
    })

    $scope.deleteItem = function (item, index) {
        console.log(item, index)
          $http.delete("/api/cart/"+ item +"/" + index).then(function (res) {
              $http.get('/api/cart').then(function(res){
                $scope.data = res.data;
              });

          });
      };
})
