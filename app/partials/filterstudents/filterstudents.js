'use strict';

angular.module('myApp.filterstudents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterstudents', {
    templateUrl: 'partials/filterstudents/filterstudents.html',
    controller: 'categoryjobsCtrl'
  });
}])

.controller('categoryjobsCtrl', [function() {

}]);