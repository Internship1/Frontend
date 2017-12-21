'use strict';

angular.module('myApp.loginAuthService', [])

.controller('loginAuthServiceCtrl', function($scope, $http, $location) {
	$scope.email = null;
	$scope.password =null;
	
	$scope.postLogin = function (email, password) {
		var data = {
			email:email,
			password:password,
			
			
		};
		//call service
		$http.post('http://192.168.0.11:8080/api/Login', JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Post Success !";
				$scope.regMsgStatus = response.status;
				if ($scope.regMsgStatus = 200) {
						$scope.loginMsg = "Login Success !";
						$scope.loginMsgRedirect = "Please wait while you're redirected ..";
						$scope.statusToken = response.status;
						$scope.token = response.data.token;

						var tokenBearer = $scope.token;
						//sessionService.set('KEY_TOKEN',JSON.stringify(tokenBearer));
						//$location.path('/view1');
				}
				var tokenBearer = $scope.token;
				console.log(tokenBearer);
				// var decoded = jwt_decode(tokenBearer);
				// $scope.decodedSub = decoded.sub;
				// console.log(decoded.sub);
				
				//UNTUK NYIMPEN TOKEN di BROWSER
				localStorage.setItem("KEY_TOKEN",JSON.stringify(tokenBearer));

				//Storage.setItem("KEY_TOKEN",JSON.stringify(tokenBearer));
				//$scope.header= 'Bearer ' + JSON.parse(getItem("KEY_TOKEN"));
				//$http.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(sessionStorage.getItem("KEY_TOKEN"));
				$http.defaults.headers.common.Authorization = 'Bearer ' + (tokenBearer);
				

				//UNTUK NGAMBIL TOKEN LAGI
				//decoded = JSON.parse(localStorage.getItem("KEY_TOKEN"));
					if ($scope.role_id = 1){
						window.location.href = "#!/home";
					}else if ($scope.role_id = 2){
						window.location.href = "#!/home";
					}	

			}, // else if fail
			function (response) {
			$scope.regMsg = "Login Failed !";
			$location.path('#!/loginpage');
		});

	}
	//$scope.logout = function () {

		//sessionService.destroy('KEY_TOKEN');
		//$location.path('#!/loginpage')
		//postLogin.logout();
	//$scope.logout = function () {
			 // remove user from local storage and clear http auth header
            //delete localStorage.getItem("KEY_TOKEN");
            //$http.defaults.headers.common.Authorization = '';
			//};
		//};
});

