'use strict';

angular.module('myApp.getAllStudentService', [])

.controller('getAllStudentCtrl', function($scope, $http, $rootScope) {
	$http({
		method: "GET",
		url: 'http://192.168.0.11:8080/api/users/allStudent'
	}).then(function successCallBack(response) {
		$scope.studentData = response.data.users;
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});


$scope.pagesizes= [9,18,27,36];
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
		url: 'http://192.168.0.11:8080/api/usersProfile/all'
	}).then(function successCallBack(response) {
		$scope.students = response.data.usersprofile;
		$scope.pagenumber= Math.ceil($scope.students.length / $scope.pagesize);

		console.log($scope.students);
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

    $http({
        method: "GET",
        url: 'http://192.168.0.11:8080/api/usersProfile/countqualify'
    }).then(function successCallBack(response) {
        $scope.qualifies = response.data.qualifies;
    }, function errorCallBack(response) {
        $scope.errorMessage = 'Ops, Something went wrong when displaying data!';
        $scope.status = response.status;
        $scope.statusText = response.statusText;
    });

$scope.getQualify=function(qualifyid){
$rootScope.qualifyid=qualifyid;
    console.log($rootScope.qualifyid);
};
$scope.getStudentQualify=function(qualifyid){
    
    var studentqualifiesUrl = 'http://192.168.0.11:8080/api/usersProfile/qualify/';
   

    $http({
        method: "GET",
        url: studentqualifiesUrl + $rootScope.qualifyid
    }).then(function successCallBack(response) {
        $scope.studentqualifies = response.data.usersprofile;
        console.log($scope.studentqualifies);
    }, function errorCallBack(response) {
        $scope.errorMessage = 'Ops, Something went wrong when displaying data!';
        $scope.status = response.status;
        $scope.statusText = response.statusText;
    });
}

 $scope.postInviteJob = function (receiver_id) {
        var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
        var decoded = jwt_decode(tokenBearer);
        var userEndPoint = decoded.sub;
        var mailUrl = 'http://192.168.0.11:8080/api/invite/store/';
        
   

         


        var data = {
            //employer_id:decoded.sub,
            
            job_id:$rootScope.job_id,
            receiver_id:receiver_id,
            sender_id:userEndPoint
        };

            
        //call service
        $http.post(mailUrl+$rootScope.job_id, JSON.stringify(data)).then(function(response) {
            if (response.data)
                alert("You succes invite this student to join your job");
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


    $scope.getStudent=function(student_id){
$rootScope.student_id=student_id;
    console.log($rootScope.student_id);
};
});