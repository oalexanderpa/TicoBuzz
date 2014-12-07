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
		label:'labelArticulo',
		icono:'glyphicon glyphicon-list-alt',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/corcovado.jpg'
	}, {
		titulo:'¿Qué personaje de la historia de Costa Rica eres?',
		tipo:'Quiz',
		label:'labelQuiz',
		icono:'glyphicon glyphicon-tasks',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/juansantamaria.jpg'
	}, {
		titulo:'Los 5 momentos de infarto de la sele en el Mundial Brasil 2014',
		tipo:'Video',
		label:'labelVideo',
		icono:'glyphicon glyphicon-film',
		puntos:'8569',
		comentarios:[
			'random comment',
			'random comment',
			'random comment',
			'random comment'
		],
		imagen:'images/costaricagrecia.jpg'
	}];
  })
  .filter('titulo', function() {
	return function(input) {
	  return input.replace(/ /gi, '-');
	};
  });
