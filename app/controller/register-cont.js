'use strict';

angular.module('myApp.postRegister', [])

.controller('register', function($scope, $http) {
	$http({
		method: "POST",
		url: "http://httpbin.org/post"
	}).then(function successCallBack(response) {
      $scope.toCheck = response.data;
    }, function errorCallBack(response) {
      $scope.toCheck = response.statusText;
      $scope.toCheck = response.status;
  });
})