'use strict';

angular.module('myApp.editStudentProfileService', [])

.controller('editStudentProfileServiceCtrl',  function($scope, $http) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditProfileUrl = 'http://192.168.0.9:8080/api/usersProfile/';
	var userEditProfileUrl = 'http://192.168.0.9:8080/api/users/';
	var perintah= "/update"
	
	$scope.editProfile = function(full_name, email, gender, username, password,  contact, address) {
		
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			password:password,
			//description:description,
			contact:contact,
			address:address,
			

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
		$http({
			method: "GET",
			url: userEditProfileUrl + userEndPoint
		}).then(function successCallBack(response) {
			$scope.id = response.data;
			$scope.fullName = response.data.user.full_name;
			$scope.username = response.data.user.username;
			$scope.email = response.data.user.email;
			$scope.gender = response.data.user.gender;
			//$scope.address = response.data.user.user_profile.address;
			//$scope.contact = response.data.user.user_profile.contact;
			//$scope.description = response.data.user.student_profile.description;
			$scope.membership = response.data.user.created_at;

			
		}, function errorCallBack(response) {
			$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});

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