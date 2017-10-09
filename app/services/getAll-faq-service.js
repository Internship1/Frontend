'use strict';

angular.module('myApp.getAllFaqService', [])

.controller('getAllFaqCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/faq/all'
	}).then(function successCallBack(response) {
		$scope.faqs = response.data.faqs;
		//console.log($scope.faqs);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});