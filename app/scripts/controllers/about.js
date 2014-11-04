'use strict';

/**
 * @ngdoc function
 * @name etownAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the etownAngularApp
 */
angular.module('etownAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
