'use strict';

angular.module('myApp.controllerCheck', [])

.controller('GreetingController', ['$scope', function($scope) {
	$scope.greeting = 'Halo!';
	$scope.homeContent = 'Second Phase Test, is Working!';
}]);