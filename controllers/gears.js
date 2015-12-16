angular.module('MyApp')
  .controller('GearsCtrl', function($scope, $auth, toastr, Account) {
    // $scope.getGears = function() {
    //   Account.getGears()
    //     .then(function(response) {
    //       $scope.user = response.data;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    // $scope.updateGears = function() {
    //   Account.updateGears($scope.user)
    //     .then(function() {
    //       toastr.success('Gears has been updated');
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };
    $scope.getSnowboard = function() {
      Account.getSnowboard()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateSnowboard = function() {
      Account.updateSnowboard($scope.user)
        .then(function() {
          toastr.success('Snowboard has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.getBindings = function() {
      Account.getBindings()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateBindings = function() {
      Account.updateBindings($scope.user)
        .then(function() {
          toastr.success('Bindings has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.getBoots = function() {
      Account.getBoots()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateBoots = function() {
      Account.updateBoots($scope.user)
        .then(function() {
          toastr.success('Boots has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    //$scope.getGears();
    $scope.getSnowboard();
    $scope.getBindings();
    $scope.getBoots();
  });

angular.module('MyApp')
  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  });

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('MyApp')
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
