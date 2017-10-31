'use strict';

angular.module('myApp.getAllPostingService', [])

.controller('getAllPostingCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: 'http://192.168.0.13:8080/api/posts/all'
	}).then(function successCallBack(response) {
		$scope.posting = response.data.posts;
		console.log($scope.posting);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.postMorePosting = function (post_text) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var postsUrl = 'http://192.168.0.13:8080/api/posts/store';
		


		var data = {
			user_id:decoded.sub,
			post_text:post_text,
			//post_picture:post_picture
		};

			
		//call service
		$http.post(postsUrl, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.jobMsg = "Post Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;
				window.location.href = "#!/home"
				
			}, // else if fail
			function (response) {
			alert("You must login first, thankyou!")
			$scope.jobMsg = "Insert Jobs Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});


	};
});