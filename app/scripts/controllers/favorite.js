'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('FavoriteCtrl', function ($scope, manageFavorite,MovieDB,$rootScope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.manageFavorite = manageFavorite;
    
    //récupérer la liste des films sur internet
    var listeFilmsJSON = localStorage.getItem('listeFilms') || "[]";
    var movies = JSON.parse(listeFilmsJSON);
	
	//récupérer la liste des id de film favorits
    var listeIdFavorite = manageFavorite.getFavorite();

    //prépare la liste de films favorits
    $scope.listeMovieFavorite = [];

	//Allimente la liste de films favorits en fonction des id de la liste "des id de film favorits"
    
    for(var i = 0; i<listeIdFavorite.length; i++){
    	for(var j = 0; j<movies.length; j++){

    	   if(movies[j].id === (listeIdFavorite[i])){
    	   	  $scope.listeMovieFavorite.push(movies[j]);
    	   }
    	}	   
	 }

	$scope.isFavorite = function(id){
	var retour = manageFavorite.isFavorite(id);
	return retour;
	}
     

  });
