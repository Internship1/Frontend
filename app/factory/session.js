'use strict';

/*
 * In this service the user data is defined for the current session. Within
 * angular current session is until the page is refreshed. When the page is
 * refreshed the user is reinitialized through $window.sessionStorage at the
 * login.js file.
 */
angular.module('myApp.Session').service('Session', function($rootScope, USER_ROLES) {
var tokenBearer = $scope.token;
				//console.log(tokenBearer);
				var decoded = jwt_decode(tokenBearer);
				 var role = decoded.role_id;
				 var userEndPoint = decoded.sub;
	this.create = function(user) {
		this.user = userEndPoint;
		this.role = role;
	};
	this.destroy = function() {
		this.user = null;
		this.role = null;
	};
	return this;
});