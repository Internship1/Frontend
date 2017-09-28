'use strict';

angular.module('myApp.composemail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/composemail', {
    templateUrl: 'views/composemail/composemail.html',
    controller: 'ComposemailCtrl'
  });
}])

.controller('ComposemailCtrl', [function() {

}]);