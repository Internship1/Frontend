'use strict';

angular.module('myApp.registerstud', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registerstud', {
    templateUrl: 'partials/registerstud/registerstud.html',
    controller: 'registerstudentCtrl'
  });
}])

.controller('registerstudentCtrl', [function() {

}]);