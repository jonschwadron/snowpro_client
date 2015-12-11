angular.module('MyApp')
  .controller('GearCtrl', function($scope, $auth, toastr, Account) {
    $scope.getGear = function() {
      Account.getGear()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateGear = function() {
      Account.updateGear($scope.user)
        .then(function() {
          toastr.success('Gear has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    // $scope.getGear();
  });
