'use strict';

angular.module('myApp.editprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editprofile', {
    templateUrl: 'views/editprofile/editprofile.html',
    controller: 'EditprofileCtrl'
  });
}])

.controller('EditprofileCtrl', [function() {

}]);