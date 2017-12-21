'use strict';

angular.module('myApp.getMyProfileStudentService', [])

.controller('getMyProfileStudentCtrl', function($scope, $http) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var usersUrl = 'http://192.168.0.11:8080/api/users/';
	var userProfileUrl = 'http://192.168.0.11:8080/api/usersProfile/';
	var applyJobsUrl = 'http://192.168.0.11:8080/api/applies/student/';
	

	$http({
		method: "GET",
		url: usersUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.student = response.data.user;
		var images = response.data.user.user_profile.images;
		$scope.gambar = 'http://192.168.0.11:8080/images/student/' + images;
		$scope.contact= response.data.user.user_profile.contact;

			if ($scope.contact == null){
				//$scope.cekCompany = false;
				window.location="#!/editprofilestud";
			} 	
				
			
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
	
	$http({
		method: "GET",
		url: userProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.usersprofile = response.data.qualify;
		//console.log($scope.usersprofile);
		
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});
	
	 $scope.pagesizes= [3,6,9,12];
    $scope.pagesize= $scope.pagesizes[0];//jumlah baris dalam satu halaman
    $scope.currentpage= 0;//lokasi halaman saat ini
    //jumlah total halaman

    
   
 $scope.paging = function (type){
        if (type == 0 && $scope.currentpage >0){
        $scope.currentpage--;    
        }else if (type ==1 && $scope.currentpage < $scope.pagenumber -1){
        $scope.currentpage++;    
        }
    }
     $scope.$watchCollection('results', function(){
        if ($scope.results==undefined)return;
        $scope.currentpage=0;
        $scope.pagenumber=Math.ceil($scope.results.length/$scope.pagesize);
    });
   
    $scope.changeAction = function(p){
        $scope.pagesize= p;
        $scope.currentpage=0;
        $scope.pagenumber=Math.ceil($scope.results.length/$scope.pagesize);
    }
    $scope.ordering = function (ordvar, by){
        ordvar = !ordvar;
        $scope.ordstatus=ordvar;
        $scope.ord = by;
        return ordvar;
    }
    
    $scope.getNumber = function(n){
        return new Array(n);
        
    }           

    $scope.getPage = function(i){
        $scope.currentpage=i;
    }

	$http({
		method: "GET",
		url: applyJobsUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.Apply= response.data.apply;
		$scope.jobsApply=[];
		var z=0;
		for (var i = 0; i < $scope.Apply.length; i++) {
			$scope.jobsApply[z]= $scope.Apply[i].job;
			z=z+1;
		};
		//console.log($scope.jobsApply);
		$scope.pagenumber= Math.ceil($scope.jobsApply.length / $scope.pagesize);
		
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	
});
