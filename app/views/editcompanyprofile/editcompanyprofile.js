'use strict';

angular.module('myApp.editcompanyprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editcompanyprofile', {
    templateUrl: 'views/editcompanyprofile/editcompanyprofile.html',
    controller: 'EditcompanyprofileCtrl'
  });
}])

.controller('EditcompanyprofileCtrl', [function() {

}]);