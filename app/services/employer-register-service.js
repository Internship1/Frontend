'use strict';

angular.module('myApp.emplRegisterService', [])

.controller('emplRegServiceCtrl',  function($scope, $http) {
	$scope.full_name = null;
	$scope.username = null;
	$scope.email = null;
	$scope.password = null;
	$scope.postRegister = function (full_name, email, gender, username, password) {
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			password:password
		};
		//call service
		$http.post('http://192.168.0.11:8080/api/registerEmployer', JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Register Successfull !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/loginemp"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Register Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
});