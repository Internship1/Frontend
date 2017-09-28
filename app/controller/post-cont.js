'use strict';

angular.module('myApp.postTest', [])

.controller('postserviceCtrl', function ($scope, $http) {
	$scope.name = null;
	$scope.age = null;
	$scope.adress = null;
	$scope.lblMsg = null;
	$scope.postdata = function (name, age, adress) {
	var data = {
	name: name,
	age: age,
	adress: adress
	};
	//Call the services
	$http.post( 'https://httpbin.org/post', JSON.stringify(data)).then(function (response) {
	if (response.data)
	$scope.msg = "Post Data Submitted Successfully!";
	$scope.msgStatus = response.status;
	}, function (response) {
	$scope.msg = "Service not Exists";
	$scope.statusval = response.status;
	$scope.statustext = response.statusText;
	$scope.headers = response.headers();
	});
	};
});