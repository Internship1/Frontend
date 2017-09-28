'use strict';

angular.module('myApp.getAllEmployerService', [])

.controller('getAllEmployerCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'https://www.w3schools.com/angular/customers.php'
	}).then(function successCallBack(response) {
		$scope.studentData = response.data.records;
	}, function errorCallBack(response) {
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});