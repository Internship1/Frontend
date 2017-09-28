'use strict';

angular.module('myApp.companyprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/companyprofile', {
    templateUrl: 'views/companyprofile/companyprofile.html',
    controller: 'CompanyprofileCtrl'
  });
}])

.controller('CompanyprofileCtrl', [function() {

}]);