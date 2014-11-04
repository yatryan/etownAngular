'use strict';

/**
 * @ngdoc function
 * @name etownAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etownAngularApp
 */
angular.module('etownAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
