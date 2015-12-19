angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $http, toastr, Account) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.getDisplayName = function() {
      Account.getDisplayName()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.getDisplayName();
  });
