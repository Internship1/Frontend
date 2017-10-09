'use strict';

angular.module('myApp.selectcompany', [])

.controller('selectcompanyCtrl', function($scope, $http, $routeParams ) {
	


	
	$scope.getCompany = function (id) {
		var id = $routeParams.id;
		var compUrl = 'http://192.168.0.8:8080/api/companies/';
		//call service
		
	$http({
		method: "GET",
		url: compUrl+id
		
	}).then(function successCallBack(response) {
		$scope.comp = response.data.employerJobs;

		var select  = response.data.employerJobs.job;
		//console.log($scope.select);
		
		var k=0;
		$scope.jo=[];
		 for (var i = 0; i <select.length; i++) {
          
          
			$scope.jo[k] = select[i];
           k=k+1
          
        }
        console.log($scope.jo);
		//console.log($scope.comp);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};






	
});
