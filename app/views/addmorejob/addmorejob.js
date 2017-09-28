'use strict';

angular.module('myApp.addmorejob', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addmorejob', {
    templateUrl: 'views/addmorejob/addmorejob.html',
    controller: 'AddmorejobCtrl'
  });
}])

.controller('AddmorejobCtrl', [function() {

}]);