'use strict';

angular.module('myApp.filterworkers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterworkers', {
    templateUrl: 'partials/filterworkers/filterworkers.html',
    controller: 'filterworkersCtrl'
  });
}])

.controller('filterworkersCtrl', [function() {

}]);