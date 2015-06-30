'use strict';

/**
 * @ngdoc service
 * @name filmApp.MovieDB
 * @description
 * # MovieDB
 * Factory in the filmApp.
 */
angular.module('filmApp')
  .factory('MovieDB', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var movies = [];
    
    for(var i=0; i<10; i++){
      movies.push({titre: 'Element ' + (i+1), commentaire: '...' +i})
    }

    // Public API here
    return {
      someMethod: function () {
        return movies;
      }
    };
  });
