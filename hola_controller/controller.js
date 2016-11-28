var app = angular.module("MyFirsApp", []);
app.controller("FirstController", function ($scope) {
  $scope.name = "Alexander";
  $scope.newComment = {};
  $scope.comments = [
    {
      comment: "Excelente",
      username: "alexlondon07"
    },
    {
     comment: "Malo",
      username: "alexlondon07---5"
    }
  ];
  $scope.addComment = function(){
    $scope.comments.push($scope.newComment);
    $scope.newComment = {};
  }
});
