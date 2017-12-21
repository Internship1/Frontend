'use strict';

angular.module('myApp.getAllTosService', [])

.controller('getAllTosCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.11:8080/api/tos/all'
	}).then(function successCallBack(response) {
		$scope.tos = response.data.tos;
		console.log($scope.tos);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});