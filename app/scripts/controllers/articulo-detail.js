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
    $scope.titulo = $routeParams.titulo.replace(/-/gi, ' ');
  }])
  .directive('scroll', function ($window) {
    return function(scope) {
        angular.element($window).bind('scroll', function() {
             if (this.pageYOffset >= 220) {
             	 angular.element('#sharebar').addClass('sharebar sharebar-scrolled');
                 console.log('Scrolled below header.');
             } else {
             	 angular.element('#sharebar').removeClass('sharebar-scrolled');
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
  })
  .directive('example', function() {
    return function() {
        angular.element(document).ready(function() {
        	angular.element('#body').removeClass('body-spacing');
        	angular.element('#navbar').removeClass('navbar-fixed-top');
        });
    };
  });
