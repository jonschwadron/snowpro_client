angular.module('MyApp')
  .controller('InventoryCtrl', function($scope) {
    $scope.showModalSnowboardReview = false;
    $scope.showModalBindingsReview = false;
    $scope.showModalBootsReview = false;
    $scope.toggleModalSnowboardReview = function(){
        $scope.showModalSnowboardReview = !$scope.showModalSnowboardReview;
    };
    $scope.toggleModalBindingsReview = function(){
        $scope.showModalBindingsReview = !$scope.showModalBindingsReview;
    };
    $scope.toggleModalBootsReview = function(){
        $scope.showModalBootsReview = !$scope.showModalBootsReview;
    };
  });

angular.module('MyApp')
  .controller('InventoryCtrl', function($scope, $auth, toastr, Account) {
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
    //       toastr.success('Inventory has been updated');
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
