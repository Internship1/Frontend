'use strict';

angular.module('myApp.getMyProfileService', [])

.controller('getMyProfileServiceCtrl', function($scope, $http, $rootScope) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var userProfileUrl = 'http://192.168.0.16:8080/api/users/';
	var userCompanyUrl = 'http://192.168.0.16:8080/api/companies/';
	var userJobsUrl = 'http://192.168.0.16:8080/api/employerJobs/';
	var applyUrl = 'http://192.168.0.16:8080/api/applies/employer/';

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
		var company_logo = response.data.user.company.company_logo;
		$scope.gambarlogo = 'http://192.168.0.16:8080/images/company/' + company_logo;
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
		url:  userJobsUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.j  = response.data.employerJobs.job;
		$scope.jobs=[];
		var m=0;
		for (var i = 0; i < $scope.j.length; i++) {
			$scope.jobs[m]=$scope.j[i]
			m=m+1;
			
		};
		
        
       $scope.pagenumber= Math.ceil($scope.jobs.length / $scope.pagesize);
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
		$scope.stude  = response.data.apply;
		console.log($scope.stude);
		$rootScope.status_id = response.data.apply.status_id;

		// var kerja  = $scope.kerja;
		
		
		
		// var k=0;
		// $scope.stude=[];

		//  for (var i = 0; i < kerja.length; i++) {
         
  //         var apply = kerja[i].job;
        
		

	
			
		// 	for (var a = 0; a < apply.length; a++) {

  //         	$scope.stude[k] = apply[a];
          	
  //         	k=k+1;
			
			
			
          
  //       }
			
            
  //       }
        //console.log($scope.stude);
        //console.log($scope.stude[k]);

	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.deleteJob = function(id){
		
		
		var urlDelete = 'http://192.168.0.16:8080/api/jobs/';
		var hapus = "/delete";
		$http.delete(urlDelete+id+hapus).then(function(response){
			
		});
	};

	$scope.acceptAppli = function (id) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var statusjobUrl = 'http://192.168.0.16:8080/api/applies/';
		var mailUrl = 'http://192.168.0.16:8080/api/outbox/store';
		var perintah = "/update";
		var data = {
			status_id:2
			
			

		};
		//call service
		$http.put(statusjobUrl + id + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("Applicant was accepted");
				$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;

				window.location.href = "#!/empprofile"
				
			}, // else if fail
			function (response) {

			$scope.jobMsg = "Process  Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});

		

	};

	$scope.declineAppli = function (id) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var statusjobUrl = 'http://192.168.0.16:8080/api/applies/';
		var perintah = "/update";
		var data = {
			status_id:3
			
			

		};
		//call service
		$http.put(statusjobUrl + id + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("Applicant was declined");
				$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;
				window.location.href = "#!/empprofile"
				
			}, // else if fail
			function (response) {

			$scope.jobMsg = "Process Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});


	};
});
