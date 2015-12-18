angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'partials/inventory.html',
        controller: 'InventoryCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('news', {
        url: '/news',
        templateUrl: 'partials/news.html',
        controller: 'NewsCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('map', {
        url: '/map',
        templateUrl: 'partials/map.html',
        controller: 'MapCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('stats', {
        url: '/stats',
        templateUrl: 'partials/stats.html',
        controller: 'StatsCtrl',
      });

    $urlRouterProvider.otherwise('/');

    $authProvider.instagram({
      clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1'
    });

    $authProvider.loginUrl = 'https://snowpro.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'https://snowpro.herokuapp.com/auth/signup';

    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
  });

  angular.module('MyApp')
    .controller('NavCtrl', function($scope, $http, toastr, Account) {
      $scope.getProfile = function() {
        Account.getProfile()
          .then(function(response) {
            $scope.user = response.data;
          })
          .catch(function(response) {
            toastr.error(response.data.message, response.status);
          });
      };
      $scope.getProfile();
    });
