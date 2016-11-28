var app = angular.module("MyFirsApp", []);
app.controller("FirstController", function ($scope, $http) {
  $scope.posts = [];
  $http.get("https://jsonplaceholder.typicode.com/posts")
      .success(function(data){
        $scope.posts = data;
        console.log(data)
      })
      .error(function(err){
        console.log(err);
      });
});
