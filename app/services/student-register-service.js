'use strict';

angular.module('myApp.studRegisterService', [])

.controller('studRegServiceCtrl', function($scope, $http) {
	$scope.full_name = null;
	$scope.username =null;
	$scope.gender = null;
	$scope.email = null;
	$scope.password = null;
	/*Next Details*/
	//$scope.self_description = null;
	//$scope.gender = null;
	//$scope.contact = null;
	//$scope.address = null;
	$scope.postRegister = function (full_name, email, gender, username, password) {
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			password:password
		};
		//call service
		$http.post('http://192.168.0.13:8080/api/registerStudent', JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Register Successfull !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Register Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
	$scope.postDetails = function (description, contact, address) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var userEditProfileUrl = 'http://192.168.0.13:8080/api/usersProfile/store/#';


		var data = {
			description:description,
			contact:contact,
			address:address
		};

		//call service
		$http.post(userEditProfileUrl + userEndPoint, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
});