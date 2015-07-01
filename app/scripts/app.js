'use strict';

/**
 * @ngdoc overview
 * @name filmApp
 * @description
 * # filmApp
 *
 * Main module of the application.
 */
angular
  .module('filmApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'ngFlag'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/film/:id', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
