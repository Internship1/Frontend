'use strict';

angular.module('myApp.studentprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile', {
    templateUrl: 'partials/studentprofile/studentprofile.html',
    controller: 'studentprofileCtrl'
  });
}])

.controller('studentprofileCtrl', [function() {

}]);