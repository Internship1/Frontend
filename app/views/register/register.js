'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'views/register/register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', [function() {

}]);