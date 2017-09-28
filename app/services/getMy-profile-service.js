'use strict';

angular.module('myApp.getMyProfileService', [])

.controller('getMyProfileServiceCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var userProfileUrl = 'http://192.168.0.9:8080/api/users/';
	var userCompanyUrl = 'http://192.168.0.9:8080/api/companies/';
	var userJobsUrl = 'http://192.168.0.9:8080/api/employerJobs/';
	var applyUrl = 'http://192.168.0.9:8080/api/applies/employer/';
	//agar user tetap mendapatkan token di header
//$http.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem("KEY_TOKEN"));
	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {

		//$scope.employer_id = response.data.user.company.employer_id;
		$scope.company_name = response.data.user.company.company_name;
		$scope.company_contact = response.data.user.company.company_contact;
		$scope.company_address = response.data.user.company.company_address;
		$scope.company_email = response.data.user.company.company_email;
		$scope.company_website = response.data.user.company.company_website;
		$scope.company_description = response.data.user.company.description;
		//$scope.address = response.data.user.user_profile.address;
		//$scope.contact = response.data.user.user_profile.contact;
		//$scope.description = response.data.user.student_profile.description;
		//$scope.membership = response.data.user.created_at;
		//$scope.cekCompany= true;
	if ($scope.company_name != "-"){
		//$scope.cekCompany = false;
		window.location="#!/empprofile";
	} else {
		window.location="#!/addcompany";
	}
	//console.log($scope.company_name);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	



	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.id = response.data;
		$scope.fullName = response.data.user.full_name;
		$scope.username = response.data.user.username;
		$scope.email = response.data.user.email;
		$scope.gender = response.data.user.gender;
		//$scope.address = response.data.user.user_profile.address;
		//$scope.contact = response.data.user.user_profile.contact;
		//$scope.description = response.data.user.student_profile.description;
		$scope.membership = response.data.user.created_at;

		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});





	$http({
		method: "GET",
		url:  userJobsUrl + userEndPoint
	}).then(function successCallBack(response) {
		//$scope.jobs  = response.data.employerJobs;
		var jb  = response.data.employerJobs;
		//console.log($scope.jobs);
		 for (var i = 0; i <jb.length; i++) {
          
          
			$scope.jobs = jb[i].job;
           
          
        }
        console.log($scope.jobs);
        //$scope.jobs=JSON.stringify(response.data.employerJobs.job);
        //var jobs=$scope.jobs;
			//
			
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});






	$http({
		method: "GET",
		url:  applyUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.jobs  = response.data.jobs;

		var jobs  = $scope.jobs;
		
		
		
		var k=0;
		$scope.stude=[];

		 for (var i = 0; i < jobs.length; i++) {
         
          var apply = jobs[i].apply;
          //console.log(apply);
		

	
			
			for (var a = 0; a < apply.length; a++) {

          	$scope.stude[k] = apply[a].student;
          	
          	k=k+1;
			
			
			
          
        }
			
            
        }
        //console.log($scope.stude);
        //console.log($scope.stude[k]);

	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});






	$scope.deleteJob = function(id){
		
		
		var urlDelete = 'http://192.168.0.9:8080/api/jobs/';
		var hapus = "/delete";
		$http.delete(urlDelete+id+hapus).then(function(response){
			
		});
	};
});
