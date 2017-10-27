'use strict';

angular.module('myApp.addMoreJobsService', ["checklist-model","720kb.datepicker"])

.controller('addMoreJobsCtrl', function($scope, $http) {
	
	//$scope.employer_id=null;
	//$scope.job_type = null;
	$scope.job_description = null;
	$scope.job_facilities = null;
	$scope.job_position = null;
	//$scope.job_status = null;
	//$scope.jobtype_id = null;

	var jobtypesUrl = 'http://192.168.0.16:8080/api/jobTypes/all';

	$http({
				method: "GET",
				url: 'http://192.168.0.16:8080/api/jobTypes/all'
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
	$scope.pilihType=function(jobtype_id){
	        $scope.jobtype_id=jobtype_id;
	         
	    var urlqualifies = 'http://192.168.0.16:8080/api/typequalify/'
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
	
	
	 
	 

	
	
	
	$scope.postMoreJobs = function (jobtype_id, qualify_id, job_position,job_facilities, job_description, min_salary,max_salary,job_open,job_close) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var jobsUrl = 'http://192.168.0.16:8080/api/jobs/store';
		
		// $scope.qualifiess= new Array($scope.qualifies.length);
	 //    $scope.qualify_id = '';
	    
	 //   	$scope.qualify_id = JSON.stringify(getSelected());
		// function getSelected() {
	 //    	return $scope.qualifies.filter(function (x,i) {
	 //            return $scope.qualifiess[i]
	 //        });
	 //    }

	 	 


		var data = {
			//employer_id:decoded.sub,
			
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