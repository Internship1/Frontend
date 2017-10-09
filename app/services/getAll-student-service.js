'use strict';

angular.module('myApp.getAllStudentService', [])

.controller('getAllStudentCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/users/allStudent'
	}).then(function successCallBack(response) {
		$scope.studentData = response.data.users;
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});