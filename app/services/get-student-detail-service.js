'use strict';

angular.module('myApp.getStudentDetailService', [])

.controller('getStudentDetailCtrl', function($scope, $http, $rootScope) {
	$scope.getStudentbDetail = function (id) {
	
		var studentUrl = 'http://192.168.0.11:8080/api/usersProfile/';
		//call service
		
	$http({
		method: "GET",
		url: studentUrl+$rootScope.student_id
		
	}).then(function successCallBack(response) {
		$scope.student = response.data.userprofile;
		var foto = response.data.userprofile.images;
		$scope.gambarlogo = 'http://192.168.0.11:8080/images/student/' + foto;
		$scope.qualifies = response.data.qualify;
		console.log($scope.student);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};


	
});