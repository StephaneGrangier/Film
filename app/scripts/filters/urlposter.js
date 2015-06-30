'use strict';

/**
 * @ngdoc filter
 * @name filmApp.filter:urlPoster
 * @function
 * @description
 * # urlPoster
 * Filter in the filmApp.
 */
angular.module('filmApp')
  .filter('urlPoster', function (MovieDB) {
    return function (posterURL) {
      if(posterURL){
        return MovieDB.imgURL + 'w185' + posterURL;
      }else{
        'images/noposter.png';
      }
    };
  });
