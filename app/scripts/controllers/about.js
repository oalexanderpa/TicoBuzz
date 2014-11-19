'use strict';

/**
 * @ngdoc function
 * @name ticoBuzzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ticoBuzzApp
 */
angular.module('ticoBuzzApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
