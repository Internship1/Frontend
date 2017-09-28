'use strict';

angular.module('myApp.contactus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactus', {
    templateUrl: 'partials/contactus/contactus.html',
    controller: 'contactusCtrl'
  });
}])

.controller('contactusCtrl', [function() {

}]);