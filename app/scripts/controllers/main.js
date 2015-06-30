'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('MainCtrl', function ($scope) {
    var ListeFilms = getListeFilms();
    $scope.films = ListeFilms;

/*     $scope.films = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	//alimente la liste avec 20 elements
	for(var i=0 ; i<20; i++){
		$scope.films.push('Element ' + (i+1));
	}
*/

    //récupération des films du localStorage, si vide l'initialise
    function getListeFilms(){
    	var listeFilmsJSON = localStorage.getItem('listeFilms') || "[]";
    	var listeFilms = JSON.parse(listeFilmsJSON);
    	return listeFilms;
    }

/*
	//ajout d'un film sans ajout d'element
	$scope.monClick = function(){
		$scope.films.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	};
*/

	//ajout d'un film
	$scope.monClick = function(){
		$scope.films.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
        
		var filmsSerialise = JSON.stringify(ListeFilms);  	//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage	
	};

	//suppression d'un film
	$scope.suprElement = function(film){
		var indice = $scope.films.indexOf(film);
		$scope.films.splice(indice,1);	
		
		var filmsSerialise = JSON.stringify(ListeFilms);  	//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage
	};


	$scope.active = true;
	$scope.nbAffiche = 10;

	
  });

