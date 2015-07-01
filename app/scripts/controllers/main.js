'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('MainCtrl', function ($scope, MovieDB, manageFavorite) {

    $scope.MovieDB = MovieDB; //essai d'ajout de movieDB au scope'





    $scope.monClick = function(){
		var titre = $scope.TitreNouveauFilm;
		var commentaire = $scope.CommentaireNouveauFilm;
		var nouveauFilm = {
			titre: titre,
			commentaire : commentaire
		}
		MovieDB.ajoutFilm(nouveauFilm);
	};

	$scope.suprElement = function(film){
		MovieDB.suppressionFilm(film);
	};

	$scope.removeFavorite = function(id){
		manageFavorite.removeFavorite(id);
	};

	$scope.addFavorite = function(id){
		manageFavorite.addFavorite(id);
	};

	$scope.isFavorite = function(id){
		var retour = manageFavorite.isFavorite(id);
		return retour;

		
	};





/*
    $scope.btAddFavorite211672 = true;
	$scope.btRemoveFavorite211672 = true;

    $scope.btAddFavorite102899 = true;
	$scope.btRemoveFavorite102899 = true;

	$scope.btAddFavorite292431 = true;
	$scope.btRemoveFavorite292431 = true;
*/

	
	$scope.active = true;
	$scope.nbAffiche = 10;
  });

