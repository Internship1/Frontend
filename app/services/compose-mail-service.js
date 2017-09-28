'use strict';

angular.module('myApp.composeMailService', [])

.controller('compMailServiceCtrl', function($scope, $http) {
	$scope.recipient = null;
	$scope.subject =null;
	$scope.messages = null;
	$scope.postMail = function (recipient, subject, messages) {
		var data = {
			recipient:recipient,
			subject:subject,
			messages:messages
		};
		//call service
		$http.post('https://httpbin.org/post', JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Messages Sent !";
				$scope.regMsgStatus = response.status;
			}, // else if fail
			function (response) {
			$scope.regMsg = "Message Not Sent !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
});