'use strict';

/**
 * @ngdoc function
 * @name ticoBuzzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticoBuzzApp
 */
angular.module('ticoBuzzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
