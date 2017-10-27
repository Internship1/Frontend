'use strict';

angular.module('myApp.notif', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile/notif', {
   
    templateUrl: 'partials/notification/notif.html',
    controller: 'getNotifCtrl'
  
  });
}])

.controller('notifCtrl', [function() {

}]);