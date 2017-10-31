'use strict';

angular.module('myApp.getJobDetailService', [])

.controller('getJobDetailCtrl', function($scope, $http, $rootScope) {
	$scope.getJobDetail = function (id) {
	
		var compUrl = 'http://192.168.0.13:8080/api/jobs/';
		//call service
		
	$http({
		method: "GET",
		url: compUrl+$rootScope.job_id
		
	}).then(function successCallBack(response) {
		$scope.jobs = response.data.job;
		var company_logo = response.data.job.employer.company.company_logo;
		$scope.gambarlogo = 'http://192.168.0.13:8080/images/company/' + company_logo;
		$scope.qualifies = response.data.qualify;
		console.log($scope.jobs);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};


	
});