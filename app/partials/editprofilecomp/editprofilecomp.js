'use strict';

angular.module('myApp.editprofilecomp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editprofilecomp', {
    templateUrl: 'partials/editprofilecomp/editprofilecomp.html',
    controller: 'editprofilecompCtrl'
  });
}])

.controller('editprofilecompCtrl', [function() {

}]);