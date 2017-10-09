'use strict';

angular.module('myApp.empprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/empprofile', {
    templateUrl: 'partials/empprofile/empprofile.html',
    controller: 'empprofileCtrl'
  }).when('/empprofile/:id/update', {
    templateUrl: 'partials/editjobemployer/editjobemployer.html',
    controller: 'editJobEmpCtrl'
  }).when('/empprofile/editprofilecomp', {
    templateUrl: 'partials/editprofilecomp/editprofilecomp.html',
    controller: 'editCompanyProfileServiceCtrl'
  });
}])

.controller('empprofileCtrl', [function() {

}]);