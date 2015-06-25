'use strict';

/**
 * @ngdoc function
 * @name filmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the filmApp
 */
angular.module('filmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
