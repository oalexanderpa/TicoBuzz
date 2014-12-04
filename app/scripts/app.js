'use strict';

/**
 * @ngdoc overview
 * @name ticoBuzzApp
 * @description
 * # ticoBuzzApp
 *
 * Main module of the application.
 */
angular
  .module('ticoBuzzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/articulo/:titulo', {
        templateUrl: 'views/articulo-detail.html',
        controller: 'ArticuloDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('NavbarController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  }]);
