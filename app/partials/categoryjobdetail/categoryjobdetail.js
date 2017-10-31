'use strict';

angular.module('myApp.categoryjobdetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categoryjobs/:id/detail', {
    templateUrl: 'partials/categoryjobdetail/categoryjobdetail.html',
    controller: 'categoryjobdetailCtrl'
  
  });
}])

.controller('categoryjobdetailCtrl', [function() {

}]);