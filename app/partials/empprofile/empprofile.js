'use strict';

angular.module('myApp.empprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/empprofile', {
    templateUrl: 'partials/empprofile/empprofile.html',
    controller: 'empprofileCtrl'
  });
}])

.controller('empprofileCtrl', [function() {

}]);