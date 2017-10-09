'use strict';

angular.module('myApp.getMyJobService', [])

.controller('getMyJobServiceCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var userProfileUrl = 'http://192.168.0.8:8080/api/employerJobs/';
	//agar user tetap mendapatkan token di header
//$http.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem("KEY_TOKEN"));
	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.id = response.data;
		$scope.employer_id = response.data.user.employer_id;
		$scope.job_position = response.data.user.job_position;
		$scope.job_facilities = response.data.user.job_facilities;
		$scope.job_description = response.data.user.job_description;
		$scope.job_status = response.data.user.job_status;
		//$scope.address = response.data.user.user_profile.address;
		//$scope.contact = response.data.user.user_profile.contact;
		//$scope.description = response.data.user.student_profile.description;
		$scope.psting = response.data.user.created_at;

		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});