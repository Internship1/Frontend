'use strict';

angular.module('myApp.headerstoken', [])

.factory('httpRequestInterceptor', function () {
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));

	// $rootScope.loggedIn = $rootScope.datalogin;
  return {
    request: function (config) {

      config.headers['Authorization'] = 'Bearer ' + (tokenBearer);
      //config.headers['Accept'] = 'application/json;odata=verbose';

      return config;
    }
  };
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

