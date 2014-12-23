'use strict';

/**
 * @ngdoc function
 * @name ticoBuzzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticoBuzzApp
 */
angular.module('ticoBuzzApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.posts = [];
    $http.get('/posts.json').
	  success(function(data) {
	  	$scope.posts = data;
	  }).
	  error(function(data, status) {
	  	console.log(status);
	  });
  }])
  .filter('titulo', function() {
	return function(input) {
	  return input.replace(/ /gi, '-');
	};
  });
