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
          toastr.success('Gears has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.getSnowboard = function() {
      Account.getSnowboard()
        .then(function(response) {
          $scope.snowboard = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateSnowboard = function() {
      Account.updateSnowboard($scope.snowboard)
        .then(function() {
          toastr.success('Snowboard has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.getGears();
    $scope.getSnowboard();
  });
