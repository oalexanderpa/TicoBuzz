'use strict';

/**
 * @ngdoc function
 * @name ticoBuzzApp.controller:ArticuloDetailCtrl
 * @description
 * # ArticuloDetailCtrl
 * Controller of the ticoBuzzApp
 */
angular.module('ticoBuzzApp')
  .controller('ArticuloDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.titulo = $routeParams.titulo.replace(/-/gi, ' ');;
  }]);
