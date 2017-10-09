'use strict';

angular.module('myApp.getMyCompanyService', [])

.controller('getMyCompanyServiceCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var userProfileUrl = 'http://192.168.0.8:8080/api/companies/';

	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.employer_id = response.data;
		$scope.company_name = response.data.company.company_name;
		$scope.company_contact = response.data.company.company_contact;
		$scope.company_address = response.data.company.company_address;
		$scope.company_email = response.data.company.company_email;
		$scope.company_website = response.data.company.company_website;
		$scope.company_description= response.data.company.company_description;
		//$scope.address = response.data.user.user_profile.address;
		//$scope.contact = response.data.user.user_profile.contact;
		//$scope.description = response.data.user.student_profile.description;
		$scope.membership = response.data.company.created_at;

	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
});