'use strict';

angular.module('myApp.getMyMailService', [])

.controller('getMyMailCtrl', function($scope, $http, $route) {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;


	var inboxUrl = 'http://192.168.0.8:8080/api/inbox/';
	var outboxUrl = 'http://192.168.0.8:8080/api/outbox/';


	$http({
		method: "GET",
		url: inboxUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.inbox = response.data.inbox;
		//console.log($scope.inbox);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$http({
		method: "GET",
		url: outboxUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.outbox = response.data.mails;
		console.log($scope.outbox);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$http({
		method: "GET",
		url: 'http://192.168.0.8:8080/api/users/all'
	}).then(function successCallBack(response) {
		
		$scope.users = response.data.users;
    	//$scope.users=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}]
        
   
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.itemList=[];
    	$scope.changedValue=function(receiver_id){
    	$scope.itemList.push(receiver_id);
    	
    	 }
	

	//for (var i = 0; i < $scope.itemList.length;  i++) {
		$scope.postMail = function (receiver_id,title,content) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var sendMailUrl = 'http://192.168.0.8:8080/api/outbox/store';
		for (var i = 0; i < $scope.itemList.length;  i++) {
		var data = {
			sender_id:decoded.sub,

			receiver_id:receiver_id[i],
			title:title,
			content:content,
			
		};
			
		//call service
		$http.post(sendMailUrl, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("Message have been sent");
				//$scope.jobMsg = "Job Succesfully Inserted !";
				$scope.jobMsgStatus = response.status;
				window.location.href = "#!/empprofile"
				
			}, // else if fail
			function (response) {
				alert("Post Mail Failed");
			$scope.jobMsg = "Insert Jobs Failed !";
			$scope.jobMsgStatus = response.status;
			$scope.jobMsgStatusText = response.statusText;
		});

};
	};
		
		//};

	$scope.deleteInbox = function(id){
		
		
		var urlDelete = 'http://192.168.0.8:8080/api/inbox/';
		var hapus = "/delete";
		var id=id;
		$http.delete(urlDelete+id+hapus).then(function(response){
			alert("Your message have been deleted");
			route.reload();
		});
	};

	$scope.deleteOutbox = function(id){
		
		
		var urloutbox = 'http://192.168.0.8:8080/api/outbox/';
		var hapus = "/delete";
		var id=id;
		$http.delete(urloutbox+id+hapus).then(function(response){
			alert("Your message have been deleted");
		});
	};
})
  .directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })