angular.module('MyApp')
  .controller('MapCtrl', function($scope, $sce) {
    $scope.snowboard_emoji = $sce.trustAsResourceUrl('images/snowboard_emoji.png');
  });
