'use strict';

angular.module('myApp.selectstudentqualify', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterstudents/qualify/:id', {
    templateUrl: 'partials/selectstudentqualify/selectstudentqualify.html',
    controller: 'selectstudentqualifyCtrl'
  });
}])

.controller('selectstudentqualifyCtrl', [function() {

}]);