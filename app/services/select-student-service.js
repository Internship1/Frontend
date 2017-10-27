'use strict';

angular.module('myApp.studentprofileselected', [])

.controller('studentprofileselectedCtrl', function($scope, $http, $routeParams ) {
	


	
	$scope.getStudent = function (id) {
		var id = $routeParams.id;
		var studentUrl = 'http://192.168.0.16:8080/api/users/';
		var studentProfileUrl = 'http://192.168.0.16:8080/api/usersProfile/';
		//call service
		
	$http({
		method: "GET",
		url: studentUrl+id
		
	}).then(function successCallBack(response) {
		$scope.student = response.data.user;

		
		//console.log($scope.comp);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
	$http({
		method: "GET",
		url: studentProfileUrl+id
		
	}).then(function successCallBack(response) {
		$scope.users = response.data.qualify;
		
		$scope.qualifies=[];
		var k=0;
		for (var i = 0; i < $scope.users .length; i++) {
			$scope.qualifies[k]=$scope.users[i];
			k=k+1;
		};
console.log($scope.qualifies);
		
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};


});
