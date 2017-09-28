'use strict';

angular.module('myApp.addcompany', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addcompany', {
    templateUrl: 'partials/addcompany/addcompany.html',
    controller: 'addcompanyCtrl'
  });
}])

.controller('addcompanyCtrl', [function() {

}]);