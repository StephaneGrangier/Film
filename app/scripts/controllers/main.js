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
    $scope.films = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	for(var i=0 ; i<20; i++){
		$scope.films.push('Element ' + (i+1));
	}
	
	
	$scope.monClick = function(){
		$scope.films.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';						//vide le champ nouveauFilm
		
	};

	$scope.suprElement = function(film){
		var indice = $scope.films.indexOf(film);
		$scope.films.splice(indice,1);	
	};


	$scope.active = true;
	$scope.nbAffiche = 10;
	$scope.debut = 3;

	
  });

