'use strict';

angular.module('myApp.getMyWorkersService', [])

.controller('getMyWorkersCtrl', function($scope, $http, $rootScope) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	var decoded = jwt_decode(tokenBearer);
	var userEndPoint = decoded.sub;

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
		url: 'http://192.168.0.13:8080/api/applies/worker/'+ userEndPoint
	}).then(function successCallBack(response) {
		$scope.workers = response.data.apply;

		console.log($scope.workers);
		$scope.pagenumber= Math.ceil($scope.workers.length / $scope.pagesize);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.deleteWorker = function(id){
		
		
		var urlDelete = 'http://192.168.0.13:8080/api/applies/';
		var hapus = "/delete";
		$http.delete(urlDelete+id+hapus).then(function(response){
			if (response.data)
				alert("You have been deleted worker");
				$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;

				 $window.location.reload()
				
			}, // else if fail
			function (response) {

			$scope.jobMsg = "Process  Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});
	};

	$scope.getStudent=function(id){
		$rootScope.student_id=id;
    console.log($rootScope.student_id);
};
});