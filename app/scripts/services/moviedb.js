'use strict';

/**
 * @ngdoc service
 * @name filmApp.MovieDB
 * @description
 * # MovieDB
 * Factory in the filmApp.
 */

angular.module('filmApp')
  .factory('MovieDB', function ($http) {
    // Service logic
    // ...

    var listeFilmsJSON = localStorage.getItem('listeFilms') || "[]";
    var movies = JSON.parse(listeFilmsJSON);

  $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data){  //cette fonction sera exécutée quand sera pret
    	movies=data.results;
    	console.log(movies);
    });


    var meaningOfLife = 42;


    // Public API here
    return {
      imgURL: 'http://image.tmdb.org/t/p/',
      someMethod: function () {
        return movies;
      },
 
    //récupération des films du localStorage, si vide l'initialise
    getListeFilms: function() {
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

    
