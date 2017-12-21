'use strict';

angular.module('myApp.editJobEmpService', [])

.controller('editJobEmpCtrl',  function($scope, $http, $routeParams) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	//console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded);
	var userEndPoint = decoded.sub;
	var EditJobUrl = 'http://192.168.0.11:8080/api/jobs/';
	var perintah= "/update"
	var JobsUrl = 'http://192.168.0.11:8080/api/jobs/';
	var id = $routeParams.id;
	$http({
		method: "GET",
		url:  JobsUrl + id
	}).then(function successCallBack(response) {
		//$scope.jobs  = response.data.employerJobs;
		$scope.jobs  = response.data.job;
	
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
				url: 'http://192.168.0.11:8080/api/jobTypes/all'
			}).then(function successCallBack(response) {
				$scope.jobtypes = response.data.jobtypes;
				console.log($scope.jobtypes);
				
			}, function errorCallBack(response) {
				$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
				$scope.status = response.status;
				$scope.statusText = response.statusText;
			});

	$scope.pilihType=function(jobtype_id){
	        $scope.jobtype_id=jobtype_id;
	         console.log($scope.jobtype_id);
	    var urlqualifies = 'http://192.168.0.11:8080/api/typequalify/'
	    $http({
	        method: "GET",
	        url:  urlqualifies + $scope.jobtype_id
	    }).then(function successCallBack(response) {
	        $scope.qualifies=[];
	         
	        var k=0;
	        
	        $scope.example14 = response.data.jobtypequalifies;
	        for (var i = 0; i < $scope.example14.length; i++) {
	            $scope.qualifies[k]= $scope.example14[i].qualify;
	           
	            k=k+1;
	            
	            
	        };
	        console.log($scope.qualifies);
	        $scope.qualify_id =[];
	 
			$scope.checkAll = function() {
			  $scope.qualify_id.qualifies = $scope.qualifies.map(function(item) { return item.id; });
			};
			$scope.uncheckAll = function() {
			  $scope.qualify_id.qualifies = [];
			};
	    }, function errorCallBack(response) {
	        $scope.errorMessage = 'Ops, Something went wrong when displaying data!';
	        $scope.status = response.status;
	        $scope.statusText = response.statusText;
	    });
	}

	$scope.editJob = function(jobtype_id, qualify_id, job_position,job_facilities, job_description, min_salary,max_salary,job_open,job_close) {
		var id = $routeParams.id;
		var data = {
			jobtype_id:jobtype_id,
			qualify_id:JSON.stringify($scope.qualify_id),
			job_position:job_position,
			job_facilities:job_facilities,
			job_description:job_description,
			min_salary:min_salary,
			max_salary:max_salary,
			job_open:job_open,
			job_close:job_close,
			
			

		};
		

		//call service
		$http.put(EditJobUrl + id + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("Job succesfully edited!");
				$scope.regMsg = "Job Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/empprofile"
			}, // else if fail
			function (response) {
			alert("Edit job failed!");	
			$scope.regMsg = "Job Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};



	
});