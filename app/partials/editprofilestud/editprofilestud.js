'use strict';

angular.module('myApp.editprofilestud', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editprofilestud', {
    templateUrl: 'partials/editprofilestud/editprofilestud.html',
    controller: 'editprofilestudCtrl'
  });
}])

.controller('editprofilestudCtrl', [function() {

}]);