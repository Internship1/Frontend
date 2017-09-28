'use strict';

angular.module('myApp.filterjobs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filterjobs', {
    templateUrl: 'partials/filterjobs/filterjobs.html',
    controller: 'filterjobsCtrl'
  });
}])

.controller('filterjobsCtrl', [function() {

}]);