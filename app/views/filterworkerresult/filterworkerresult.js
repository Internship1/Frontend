'use strict';

angular.module('myApp.filterworkerresult', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterworkerresult', {
    templateUrl: 'views/filterworkerresult/filterworkerresult.html',
    controller: 'FilterworkerresultCtrl'
  });
}])

.controller('FilterworkerresultCtrl', [function() {

}]);