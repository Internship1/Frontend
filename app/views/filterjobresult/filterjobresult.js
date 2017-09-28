'use strict';

angular.module('myApp.filterjobresult', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterjobresult', {
    templateUrl: 'views/filterjobresult/filterjobresult.html',
    controller: 'FilterjobresultCtrl'
  });
}])

.controller('FilterjobresultCtrl', [function() {

}]);