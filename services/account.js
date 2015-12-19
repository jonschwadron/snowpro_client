angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('https://snowpro.herokuapp.com/api/profile');
      },
      updateProfile: function(profileData) {
        return $http.put('https://snowpro.herokuapp.com/api/profile', profileData);
      },
      getSnowboard: function() {
        return $http.get('https://snowpro.herokuapp.com/api/snowboard');
      },
      updateSnowboard: function(snowboardData) {
        return $http.put('https://snowpro.herokuapp.com/api/snowboard', snowboardData);
      },
      getBindings: function() {
        return $http.get('https://snowpro.herokuapp.com/api/bindings');
      },
      updateBindings: function(bindingsData) {
        return $http.put('https://snowpro.herokuapp.com/api/bindings', bindingsData);
      },
      getBoots: function() {
        return $http.get('https://snowpro.herokuapp.com/api/boots');
      },
      updateBoots: function(bootsData) {
        return $http.put('https://snowpro.herokuapp.com/api/boots', bootsData);
      },
      getDisplayName: function() {
        return $http.put('https://snowpro.herokuapp.com/api/displayName');
      }
    };
  });

// angular.module('Instagram')
//     .factory('API', function($http) {
//
//       return {
//         getFeed: function() {
//           return $http.get('https://snowpro.herokuapp.com/api/feed');
//         },
//         getMediaById: function(id) {
//           return $http.get('https://snowpro.herokuapp.com/api/media/' + id);
//         },
//         likeMedia: function(id) {
//           return $http.post('https://snowpro.herokuapp.com/api/like', { mediaId: id });
//         }
//       }
//
//     });
