'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('MainCtrl', function ($scope, MovieDB) {

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

	$scope.active = true;
	$scope.nbAffiche = 10;
  });

