'use strict';

angular.module('myApp.profilestudents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profilestudents', {
    templateUrl: 'views/profilestudents/profilestudents.html',
    controller: 'ProfileStudentsCtrl'
  });
}])

.controller('ProfileStudentsCtrl', [function() {

}]);