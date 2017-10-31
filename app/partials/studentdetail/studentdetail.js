'use strict';

angular.module('myApp.studentdetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterstudents/:id/detail', {
    templateUrl: 'partials/studentdetail/studentdetail.html',
    controller: 'studentdetailCtrl'
  
  });
}])

.controller('studentdetailCtrl', [function() {

}]);