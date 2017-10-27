'use strict';

angular.module('myApp.tos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tos', {
    templateUrl: 'partials/tos/tos.html',
    controller: 'tosCtrl'
  });
}])

.controller('tosCtrl', [function() {

}]);