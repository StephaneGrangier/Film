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
    
  /*  for(var i=0; i<10; i++){
      movies.push({titre: 'Element ' + (i+1), commentaire: '...' +i})
    }*/


    // Public API here
    return {
      someMethod: function () {
        return movies;
      },
 
    //récupération des films du localStorage, si vide l'initialise
    getListeFilms: function() {
    	var listeFilmsJSON = localStorage.getItem('listeFilms') || "[]";
    	var listeFilms = JSON.parse(listeFilmsJSON);
    	return movies;
    },

    ajoutFilm: function(nouveauFilm) {
    	movies.push(nouveauFilm);
    	
    	var filmsSerialise = JSON.stringify(movies);  		//serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage

    },

	suppressionFilm: function(film) {
		var indice = movies.indexOf(film);
		movies.splice(indice,1);	
		var filmsSerialise = JSON.stringify(movies);  //serialiser
		localStorage.setItem('listeFilms',filmsSerialise);	//ajout au LocalStorage
	}
   
   }

   });

/*
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

    
