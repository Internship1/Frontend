'use strict';

angular.module('myApp.editStudentProfileService', [])

.controller('editStudentProfileServiceCtrl',  function($scope, $http) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditStudentProfileUrl = 'http://192.168.0.8:8080/api/usersProfile/';
	var userEditProfileUrl = 'http://192.168.0.8:8080/api/users/';
	var perintah= "/update"
	
	$scope.editUser = function(full_name, email, gender, username) {
		
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			//password:password,
			
			

		};
		

		//call service
		$http.put(userEditProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)

				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				//window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};

	$scope.editStudent = function(contact, address, description) {
		
		var data = {
			contact:contact,
			address:address,
			description:description
			

		};
		

		//call service
		$http.put(userEditStudentProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("User Profile Succesfully Edited");
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				//window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
				alert("Edited Failed");
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};

	
});