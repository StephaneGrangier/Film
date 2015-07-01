'use strict';

/**
 * @ngdoc service
 * @name filmApp.manageFavorite
 * @description
 * # manageFavorite
 * Factory in the filmApp.
 */
angular.module('filmApp')
  .factory('manageFavorite', function () {
    // Service logic
    // ...

    var listeFavoritesJSON = localStorage.getItem('listeFavorites') || "[]";
    var favorites = JSON.parse(listeFavoritesJSON);

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      //récupération des favorits du localStorage, si vide l'initialise
      getFavorite: function() {
    	return favorites;
    },

     addFavorite: function(favoriteMovie) {
    	favorites.push(favoriteMovie);
    	
    	var favoritesSerialise = JSON.stringify(favorites);  		//serialiser
		localStorage.setItem('listeFavorites',favoritesSerialise);	//ajout au LocalStorage

    },

	removeFavorite: function(favoriteMovie) {
		var indice = favorites.indexOf(favoriteMovie);
		favorites.splice(indice,1);	
		var favoritesSerialise = JSON.stringify(favorites);  		//serialiser
		localStorage.setItem('listeFavorites',favoritesSerialise);	//ajout au LocalStorage
	},

	 isFavorite: function(idMovie) {
	 	var trouve;
	 	trouve = false;
	 	var indice;

	 	while (!trouve && indice < favorites.length){
	 		trouve = favorites[indice]==idMovie;
	 	}
	 	return trouve;
    }

    };
  });




/*-----------------------------------*/


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

    
