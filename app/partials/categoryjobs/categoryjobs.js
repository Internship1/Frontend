'use strict';

angular.module('myApp.categoryjobs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categoryjobs', {
    templateUrl: 'partials/categoryjobs/categoryjobs.html',
    controller: 'categoryjobsCtrl'
  }).when('/categoryjob/:jobtype_id', {
    templateUrl: 'partials/selectcategoryjob/selectcategoryjob.html',
    controller: 'getAllJobsCtrl'
  });
}])

.controller('categoryjobsCtrl', [function() {

}]);