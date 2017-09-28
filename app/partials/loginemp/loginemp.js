'use strict';

angular.module('myApp.loginemp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginemp', {
    templateUrl: 'partials/loginemp/loginemp.html',
    controller: 'loginempCtrl'
  }).when('/logout', {
    templateUrl: 'partials/home/home.html',
    controller: 'logoutAuthServiceCtrl'
  });
}])

.controller('loginempCtrl', [function() {

}]);