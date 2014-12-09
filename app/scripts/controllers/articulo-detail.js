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
            console.log(angular.element('#stats').offset().top+32);
            if (this.pageYOffset >= angular.element('#stats').offset().top+32) {
             	  angular.element('#sharebar').addClass('sharebar sharebar-scrolled');
                angular.element('#artImg').addClass('articuloIndividual-Imagen');
                console.log('Scrolled below header.');
            } else {
             	  angular.element('#sharebar').removeClass('sharebar-scrolled');
                angular.element('#artImg').removeClass('articuloIndividual-Imagen');
                console.log('Header is in view.');
            }
            angular.element('#sharebar').css({
                width:  angular.element('#bodyLeft').width()
            });
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
  })
  .directive('resize', function ($window) {
    return function(scope) {
        angular.element($window).bind('resize', function() {
            angular.element('#sharebar').css({
                width:  angular.element('#bodyLeft').width()
            });
            scope.$apply();
        });
    };
  });
