'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:FilmCtrl
 * @description
 * # FilmCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('FilmCtrl', function ($scope,$routeParams,MovieDB,$http,$rootScope) {
    $scope.id =$routeParams.id;

    var idFilm = $routeParams.id;
    $scope.imgURL = 'http://image.tmdb.org/t/p/';
    $rootScope.MovieDB = MovieDB;

    //récupérer les données pour ce film sur internet
    $http.get('http://amc.ig.he-arc.ch:3003/movie/'+idFilm+'?append_to_response=similar,release,credits')
    .success(function(data){  //cette fonction sera exécutée quand sera pret
    	$scope.film = data;
    	$rootScope.bgImage = data.backdrop_path;
    });

  });
