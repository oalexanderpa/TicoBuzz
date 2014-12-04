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
    $scope.posts = [{
		titulo:'10 lugares que debes visitar antes de pensar en viajar a otro país',
		tipo:'Articulo',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/corcovado.jpg'
	}, {
		titulo:'10 lugares que debes visitar antes de pensar en viajar a otro país',
		tipo:'Quiz',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/corcovado.jpg'
	}, {
		titulo:'10 lugares que debes visitar antes de pensar en viajar a otro país',
		tipo:'Video',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/corcovado.jpg'
	}];
  })
  .filter('titulo', function() {
	return function(input) {
	  return input.replace(/ /gi, '-');
	};
  });
