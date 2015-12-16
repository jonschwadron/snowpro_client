var mymodal = angular.module('mymodal', []);

mymodal.controller('MainCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  });

mymodal.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ title }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

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
