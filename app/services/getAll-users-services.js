'use strict';

angular.module('myApp.getAllUsersService', [])

.controller('getAllUsersCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.13:8080/api/users/all'
	}).then(function successCallBack(response) {
		
		$scope.users = response.data.users;
    	//$scope.users=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}]
        $scope.itemList=[];
    	$scope.changedValue=function(item){
    	$scope.itemList.push(item);
    	console.log($scope.itemList);
    }
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});