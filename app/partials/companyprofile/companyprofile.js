'use strict';

angular.module('myApp.companyprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/companyprofile', {
    templateUrl: 'partials/companyprofile/companyprofile.html',
    controller: 'companyprofileCtrl',
    
  });
}])

.controller('companyprofileCtrl', [function() {

}]);