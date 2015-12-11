angular.module('MyApp')
  .controller('GearsCtrl', function($scope, $auth, toastr, Account) {
    $scope.getGears = function() {
      Account.getGears()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateGears = function() {
      Account.updateGears($scope.user)
        .then(function() {
          toastr.success('Gear has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.getGear();
  });
