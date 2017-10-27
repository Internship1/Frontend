'use strict';

angular.module('myApp.studentprofileselected', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile/:id', {
    templateUrl: 'partials/studentprofileselected/studentprofileselected.html',
    controller: 'studentprofileselectedCtrl'
  });
}])

.controller('studentprofileselectedCtrl', [function() {

}]);