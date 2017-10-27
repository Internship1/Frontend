'use strict';

angular.module('myApp.notifService', [])

.controller('getNotifCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var url ='http://192.168.0.16:8080/api/notification/student/';

	
	$http({
		method: "GET",
		url: url + userEndPoint
	}).then(function successCallBack(response) {
		$scope.notif = response.data.notif;
		console.log($scope.notif);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});