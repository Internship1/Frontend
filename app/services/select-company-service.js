'use strict';

angular.module('myApp.selectcompany', [])

.controller('selectcompanyCtrl', function($scope, $http, $routeParams ) {
	


	
	$scope.getCompany = function (id) {
		var id = $routeParams.id;
		var compUrl = 'http://192.168.0.13:8080/api/companies/';
		//call service
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
		url: compUrl+id
		
	}).then(function successCallBack(response) {
		$scope.comp = response.data.employerJobs;
		var company_logo = $scope.comp.company.company_logo;
		$scope.gambarlogo = 'http://192.168.0.13:8080/images/company/' + company_logo;
		var select  = response.data.employerJobs.job;
		
		
		var k=0;
		$scope.jo=[];
		 for (var i = 0; i <select.length; i++) {
          
          
			$scope.jo[k] = select[i];
           k=k+1
          
        }
        console.log($scope.jo);
        $scope.pagenumber= Math.ceil($scope.jo.length / $scope.pagesize);
		//console.log($scope.comp);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	

	};






	
});
