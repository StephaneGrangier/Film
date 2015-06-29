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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	for(var i=0 ; i<100; i++){
		$scope.awesomeThings.push('Element ' + (i+1));
	}
	
	
	$scope.monClick = function(){
		$scope.awesomeThings.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';						//vide le champ nouveauFilm
		
	};
	$scope.active = true;
	$scope.nbAffiche = 10;
	$scope.debut = 3;

	
  });
