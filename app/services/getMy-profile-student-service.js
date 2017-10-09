'use strict';

angular.module('myApp.getMyProfileStudentService', [])

.controller('getMyProfileStudentCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var userProfileUrl = 'http://192.168.0.8:8080/api/users/';
	

	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.student = response.data.user;
		var images = response.data.user.user_profile.images;
		$scope.gambar = 'http://192.168.0.8:8080/images/student/' + images;

		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});



	

	






	





	
});
