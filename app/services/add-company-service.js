'use strict';

angular.module('myApp.addCompanyService', [])

.controller('addCompanyServiceCtrl', function($scope, $http) {
	//$scope.employer_id=null;
	$scope.company_name = null;
	$scope.company_contact = null;
	$scope.company_address = null;
	$scope.company_email = null;
	$scope.company_website = null;
	$scope.company_description = null;

	$scope.putCompany = function ( company_name, company_contact, company_address, company_email, company_website, company_description) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var companyUrl = 'http://192.168.0.8:8080/api/companies/';
		var perintah= "/update";


		var data = {
			//employer_id:employer_id,
			company_name:company_name,
			company_contact:company_contact,
			company_address:company_address,
			company_email:company_email,
			company_website:company_website,
			company_description:company_description,
			
		};

		//call service
		$http.put(companyUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.compMsg = "Company Succesfully Inserted !";
				$scope.compMsgStatus = response.status;
				if($scope.compMsgStatus == 200){
					console.log($scope.compMsg);
					window.location.href = "#!/empprofile"
				}
				
			},
				
				
			// else if fail
			function (response) {
			$scope.compMsg = "Insert Company Failed !";
			$scope.compMsgStatus = response.status;
			$scope.compMsgStatusText = response.statusText;
		});
	};
	
	
});