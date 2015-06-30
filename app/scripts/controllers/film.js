'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:FilmCtrl
 * @description
 * # FilmCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('FilmCtrl', function ($scope,$routeParams) {
    $scope.id =$routeParams.id;
    $scope.films = MoviesDB.getMovies();
  });
