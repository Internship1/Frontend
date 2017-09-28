'use strict';

angular.module('myApp.termofservices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/termofservices', {
    templateUrl: 'views/termofservices/termofservices.html',
    controller: 'TermofservicesCtrl'
  });
}])

.controller('TermofservicesCtrl', [function() {

}]);