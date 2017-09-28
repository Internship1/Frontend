'use strict';

angular.module('myApp.registeremp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registeremp', {
    templateUrl: 'partials/registeremp/registeremp.html',
    controller: 'registerempCtrl'
  });
}])

.controller('registerempCtrl', [function() {

}]);