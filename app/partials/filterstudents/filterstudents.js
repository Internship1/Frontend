'use strict';

angular.module('myApp.filterstudents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterstudents/:id', {
    templateUrl: 'partials/filterstudents/filterstudents.html',
    controller: 'categoryjobsCtrl'
  }).when('/filterstudents/qualify/:id', {
    templateUrl: 'partials/selectstudentqualify/selectstudentqualify.html',
    controller: 'selectstudentqualifyCtrl'
  }).when('/filterstudents/:id/detail', {
    templateUrl: 'partials/studentdetail/studentdetail.html',
    controller: 'studentdetailCtrl'
  
  });
}])

.controller('categoryjobsCtrl', [function() {

}]);