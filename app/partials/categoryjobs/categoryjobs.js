'use strict';

angular.module('myApp.categoryjobs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categoryjobs', {
    templateUrl: 'partials/categoryjobs/categoryjobs.html',
    controller: 'categoryjobsCtrl'
  }).when('/categoryjob/:jobtype_id', {
    templateUrl: 'partials/selectcategoryjob/selectcategoryjob.html',
    controller: 'getAllJobsCtrl'
  }).when('/categoryjob/company/:id', {
    templateUrl: 'partials/selectcompany/selectcompany.html',
    controller: 'selectcompanyCtrl'
  }).when('/categoryjobs/:id/detail', {
    templateUrl: 'partials/categoryjobdetail/categoryjobdetail.html',
    controller: 'categoryjobdetailCtrl'
  });
}])

.controller('categoryjobsCtrl', [function() {

}]);