'use strict';

angular.module('myApp.loginstud', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginstud', {
    templateUrl: 'partials/loginstud/loginstud.html',
    controller: 'loginstudCtrl'
  }).when('/logout', {
    templateUrl: 'partials/home/home.html',
    controller: 'logoutAuthServiceCtrl'
  });
}])

.controller('loginstudCtrl', [function() {

}]);