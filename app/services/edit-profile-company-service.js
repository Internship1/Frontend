'use strict';

angular.module('myApp.editCompanyProfileService', [])

.controller('editCompanyProfileServiceCtrl',  function($scope, $http) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditCompanyProfileUrl = 'http://192.168.0.8:8080/api/companies/';
	var perintah= "/update"

	$http({
		method: "GET",
		url: userEditCompanyProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.compDetail= response.data.employerJobs.company;
		//console.log($scope.compDetail);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.editComapnyProfile = function(company_name, company_contact, company_address, company_email, company_website,company_description) {
		var data = {
			company_name:company_name,
			company_contact:company_contact,
			company_address:company_address,
			company_email:company_email,
			company_website:company_website,
			company_description:company_description
			
		};
		// call service
		//$http.put('http://192.168.0.14:8080/api/usersProfile/{user_id}/update', JSON.stringify(data)).then(function(response) {
			//if(response.data)
			//	$scope.regMsg = "Register as Employer Succesfull !";
			//	$scope.regMsgStatus = response.status;
			//	window.location.href = "#!/companyprofile"
			//}, //else if fail
			//function (response) {
			//$scope.regMsg = "Register as Employer Failed !";
			//$scope.regMsgStatus = response.status;
			//$scope.regMsgStatusText = response.statusText;
		//});
	//};
//});

		//call service
		$http.put(userEditCompanyProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/companyprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
});