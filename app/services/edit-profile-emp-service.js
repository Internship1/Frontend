'use strict';

angular.module('myApp.editEmpProfileService', [])

.controller('editEmpProfileServiceCtrl',  function($scope, $http) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditProfileUrl = 'http://192.168.0.9:8080/api/users/';
	var perintah= "/update"
	
	$scope.editProfileEmp = function(full_name, email, gender, username, password) {
		
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			password:password,
			//description:description,
			
			

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
		$http.put(userEditProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
});