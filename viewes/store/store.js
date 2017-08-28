var app = angular.module("app");

app.controller("storeCtrl", function ($scope, $http) {
    // get data from the database    
    $http.get('/api/mobile').then(function (res) {
        console.log(res.data); //the api object
        $scope.data = res.data;
    })

    $scope.add = function (phone) {
        $http.post('/api/cart', phone).then(function (res) {
            swal("Item added!", "continue shopping now")
        }, function (err) {
            alert('there was error' + err);
        })
    }
    
    
})
