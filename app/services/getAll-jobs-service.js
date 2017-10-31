'use strict';

angular.module('myApp.getAllJobsService', [])

.controller('getAllJobsCtrl', function($scope, $http, $routeParams, $rootScope) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));

	$scope.pagesizes= [6,12,18,24];
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
		url: 'http://192.168.0.13:8080/api/jobs/all'
		
	}).then(function successCallBack(response) {
		$scope.jobs = response.data.jobs;


		$scope.pagenumber= Math.ceil($scope.jobs.length / $scope.pagesize);

		var comp  = response.data.jobs;
		$scope.companies=[];
		
		
		var x=0;
		 for (var i = 0; i < response.data.jobs.length; i++) {
          
          
			$scope.companies[x] = comp[i].employer.company;
			
				
				
       
		
			
           	x=x+1;
           
          
        }
       
        console.log($scope.companies);
        
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
		url: 'http://192.168.0.13:8080/api/countjob'
	}).then(function successCallBack(response) {
		$scope.jb = response.data.jobs;
		
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	
	$scope.getType = function (jobtype_id) {
		var jobtype_id = $routeParams.jobtype_id;
		var tipeUrl = 'http://192.168.0.13:8080/api/jobs/type/';
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

	

		$scope.postApply = function (id, employer_id) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var applyUrl = 'http://192.168.0.13:8080/api/applies/store/';

		var data ={
			id:id,
			employer_id:employer_id};
		//call service
		$http.post(applyUrl + id, JSON.stringify(data)).then(function(response) {
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

    $scope.getJob = function(job_id){
        $rootScope.job_id = job_id;
        console.log($rootScope.job_id);
    
   
    };
	
});