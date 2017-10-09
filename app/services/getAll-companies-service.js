'use strict';

angular.module('myApp.getAllCompaniesService', [])

.controller('getAllCompaniesCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/companies/all'
	}).then(function successCallBack(response) {
		$scope.companiestData = response.data.companies;
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});