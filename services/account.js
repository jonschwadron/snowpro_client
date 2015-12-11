angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('https://snowpro.herokuapp.com/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('https://snowpro.herokuapp.com/api/me', profileData);
      },
      getGears: function() {
        return $http.get('https://snowpro.herokuapp.com/api/me');
      },
      updateGears: function(gearsData) {
        return $http.put('https://snowpro.herokuapp.com/api/me', gearsData);
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
