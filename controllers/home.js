angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $http, toastr, Account) {
    // $scope.getProfile = function() {
    //   Account.getProfile()
    //     .then(function(response) {
    //       $scope.user = response.data;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    // $scope.getSnowboard = function() {
    //   Account.getSnowboard()
    //     .then(function(response) {
    //       $scope.user = response.data;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    // $scope.getBindings = function() {
    //   Account.getBindings()
    //     .then(function(response) {
    //       $scope.user = response.data;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    // $scope.getBoots = function() {
    //   Account.getBoots()
    //     .then(function(response) {
    //       $scope.user = response.data;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    // $scope.getProfile();
    // $scope.getSnowboard();
    // $scope.getBindings();
    // $scope.getBoots();

    // $http.jsonp('//api.github.com/repos/sahat/satellizer?callback=JSON_CALLBACK')
    //   .success(function(data) {
    //     if (data) {
    //       if (data.data.stargazers_count) {
    //         $scope.stars = data.data.stargazers_count;
    //       }
    //       if (data.data.forks) {
    //         $scope.forks = data.data.forks;
    //       }
    //       if (data.data.open_issues) {
    //         $scope.issues = data.data.open_issues;
    //       }
    //     }
    //   });
  });
