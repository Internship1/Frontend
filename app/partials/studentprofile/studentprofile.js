'use strict';

angular.module('myApp.studentprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile', {
    templateUrl: 'partials/studentprofile/studentprofile.html',
    controller: 'studentprofileCtrl'
  }).when('/studentprofile/notif', {
    templateUrl: 'partials/notification/notif.html',
    controller: 'getNotifCtrl'
  }).when('/studentprofile/addCV', {
    templateUrl: 'partials/addCV/addCV.html',
    controller: 'addCVCtrl'
  });
}])

.controller('studentprofileCtrl', [function() {

}]);