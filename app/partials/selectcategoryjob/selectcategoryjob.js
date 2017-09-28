'use strict';

angular.module('myApp.selectcategoryjob', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectcategoryjob/:jobtype_id', {
    templateUrl: 'partials/selectcategoryjob/selectcategoryjob.html',
    controller: 'getAllJobsCtrl'
  });
}])

.controller('selectcategoryjobCtrl', [function() {

}]);