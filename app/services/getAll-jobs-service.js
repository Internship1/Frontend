'use strict';

angular.module('myApp.getAllJobsService', [])

.controller('getAllJobsCtrl', function($scope, $http, $routeParams) {
	
	
	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/jobs/all'
	}).then(function successCallBack(response) {
		$scope.jobs = response.data.jobs;
		//$scope.hitung = response.data.jobs.length;
		//console.log($scope.hitung);
		//var jobs = $scope.jobs;
		//$scope.company_name = jobs.employer;
		//var jumlah = response.data.jobs.job_type.length;
		
		//$scope.employer_id = response.data.user.company.employer_id;
		var comp  = response.data.jobs;
		 for (var i = 0; i < response.data.jobs.length; i++) {
          
          
			$scope.companies = comp[i].employer.company;
           
          
        }
        
        var jb  = response.data.jobs;
        var k=0;
        $scope.typs= [];

        for (var a=0; a<jb.length;a++)
        {
        	$scope.types = jb[a].job_type;
        	var types= $scope.types;
        	
        	for (var b=0; b<$scope.types; b++)
        	{
        		$scope.typs=types[b].length;
        		
        		k=k+1;

        	
        	}

        	//console.log($scope.types);

        }
        
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});



	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/countjob'
	}).then(function successCallBack(response) {
		$scope.jb = response.data.jobs;
		
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	
	$scope.getType = function (jobtype_id) {
		var jobtype_id = $routeParams.jobtype_id;
		var tipeUrl = 'http://192.168.0.8:8080/api/jobs/type/';
		//call service
		
	$http({
		method: "GET",
		url: tipeUrl+jobtype_id
		
	}).then(function successCallBack(response) {
		$scope.js = response.data.jobs;
		console.log($scope.js);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};

	

		$scope.postApply = function (id) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var applyUrl = 'http://192.168.0.8:8080/api/applies/store/';
		//call service
		$http.post(applyUrl + id, JSON.stringify(id)).then(function(response) {
			if (response.data)
				alert("Congratulation, apply job successfully!");
				$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;
				window.location.href = "#!/categoryjobs"
				
			}, // else if fail
			function (response) {
			$scope.jobMsg = "Insert Jobs Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});


	};

	 $scope.showDetails = function(person){
      $scope.selectedPerson = person;
    }

	
});