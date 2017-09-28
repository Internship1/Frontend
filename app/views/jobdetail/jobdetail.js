'use strict';

angular.module('myApp.jobdetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jobdetail', {
    templateUrl: 'views/jobdetail/jobdetail.html',
    controller: 'JobdetailCtrl'
  });
}])

.controller('JobdetailCtrl', [function() {

}]);