angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, toastr, Account) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
  });
  $scope.getProfile();
