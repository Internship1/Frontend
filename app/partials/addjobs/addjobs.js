'use strict';

angular.module('myApp.addjobs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addjobs', {
    templateUrl: 'partials/addjobs/addjobs.html',
    controller: 'addjobCtrl'
  });
}])

.controller('addjobCtrl', [function() {

}]);