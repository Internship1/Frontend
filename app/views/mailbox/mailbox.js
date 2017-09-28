'use strict';

angular.module('myApp.mailbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mailbox', {
    templateUrl: 'views/mailbox/mailbox.html',
    controller: 'MailboxCtrl'
  });
}])

.controller('MailboxCtrl', [function() {

}]);