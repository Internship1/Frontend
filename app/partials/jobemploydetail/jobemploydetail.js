'use strict';

angular.module('myApp.jobemploydetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jobdetail/:id', {
    templateUrl: 'partials/jobemploydetail/jobemploydetail.html',
    controller: 'jobemploydetailCtrl'
  });
}])

.controller('jobemploydetailCtrl', [function() {

}]);