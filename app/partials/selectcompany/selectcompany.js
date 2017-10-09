'use strict';

angular.module('myApp.selectcompany', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectcompanys/:id', {
    templateUrl: 'partials/selectcompany/selectcompany.html',
    controller: 'selectcompanyCtrl'
  });
}])

.controller('empprofileCtrl', [function() {

}]);