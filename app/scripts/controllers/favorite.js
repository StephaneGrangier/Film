'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('FavoriteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
