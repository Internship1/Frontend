'use strict';

angular.module('myApp.httpCheck', [])

.controller('httpController', function($scope, $http) {

	$http({
		method: "GET",
		url: 'https://httpbin.org/get'
	}).then(function successCallBack(response) {
      $scope.myWelcome = response.data;
      $scope.myStatus = response.status;
    }, function errorCallBack(response) {
      $scope.myWelcome = response.statusText;
      $scope.myStatus = response.status;
  });
});