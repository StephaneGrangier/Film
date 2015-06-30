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
   
    $scope.films = MovieDB.getListeFilms();


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
		/*
		var indice = $scope.films.indexOf(film);
		$scope.films.splice(indice,1);	
		
		var filmsSerialise = JSON.stringify($scope.films);  	//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage
	*/
	};


/*
    //récupération des films du localStorage, si vide l'initialise
    function getListeFilms(){
    	var listeFilmsJSON = localStorage.getItem('listeFilms') || "[]";
    	var listeFilms = JSON.parse(listeFilmsJSON);
    	return listeFilms;
    }


	//ajout d'un film
	$scope.monClick = function(){
		var titre = $scope.TitreNouveauFilm;
		var commentaire = $scope.CommentaireNouveauFilm;
		var nouveauFilm = {
			titre: titre,
			commentaire : commentaire
		};

		$scope.films.push($scope.TitreNouveauFilm);
		$scope.TitreNouveauFilm = '';
		$scope.CommentaireNouveauFilm = '';
		
		var filmsSerialise = JSON.stringify($scope.films);  	//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage
	};

	//suppression d'un film
	$scope.suprElement = function(film){
		var indice = $scope.films.indexOf(film);
		$scope.films.splice(indice,1);	
		
		var filmsSerialise = JSON.stringify($scope.films);  	//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage
	};

*/
	$scope.active = true;
	$scope.nbAffiche = 10;
  });

