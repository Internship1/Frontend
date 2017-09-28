'use strict';

angular.module('myApp.loginpage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginpage', {
    templateUrl: 'views/loginpage/loginpage.html',
    controller: 'loginAuthServiceCtrl'
  }).when('/logout', {
        templateUrl : 'view1/view1.html',
        controller : 'LogoutController'
    });
}])

.controller('LoginpageCtrl', [function() {

}]);