'use strict';

angular.module('myApp.addMoreJobsService', [])

.controller('addMoreJobsCtrl', function($scope, $http) {
	
	//$scope.employer_id=null;
	//$scope.job_type = null;
	$scope.job_description = null;
	$scope.job_facilities = null;
	$scope.job_position = null;
	//$scope.job_status = null;
	//$scope.jobtype_id = null;

	var jobtypesUrl = 'http://192.168.0.9:8080/api/jobTypes/all';

	$http({
				method: "GET",
				url: 'http://192.168.0.9:8080/api/jobTypes/all'
			}).then(function successCallBack(response) {
				$scope.jobtypes = response.data.jobtypes;
				console.log($scope.jobtypes);
				//var jobs = $scope.jobs;
				//$scope.company_name = jobs.employer;
				
				
				//$scope.employer_id = response.data.user.company.employer_id;
				//var comp  = response.data.jobs;
				 //for (var i = 0; i < response.data.jobs.length; i++) {
		          
		          
					//$scope.companies = comp[i].employer.company;
		           
		          
		        //}
		        //console.log($scope.jobs);
				
			}, function errorCallBack(response) {
				$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
				$scope.status = response.status;
				$scope.statusText = response.statusText;
			});

	$scope.postMoreJobs = function (job_position,job_facilities, job_description, jobtype_id) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var jobsUrl = 'http://192.168.0.9:8080/api/jobs/store';
		


		var data = {
			//employer_id:decoded.sub,
			//job_type:job_type,
			job_position:job_position,
			job_facilities:job_facilities,
			job_description:job_description,
			
			
			//job_status:job_status,
			jobtype_id:jobtype_id,
			//qualify_id:qualify_id
		};

			
		//call service
		$http.post(jobsUrl, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;
				window.location.href = "#!/empprofile"
				
			}, // else if fail
			function (response) {
			$scope.jobMsg = "Insert Jobs Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});


	};
	
		
});