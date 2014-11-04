'use strict';

/**
 * @ngdoc overview
 * @name etownAngularApp
 * @description
 * # etownAngularApp
 *
 * Main module of the application.
 */
angular
  .module('etownAngularApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
