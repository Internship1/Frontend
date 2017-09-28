'use strict';

angular.module('myApp.editprofileemp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editprofileemp', {
    templateUrl: 'partials/editprofileemp/editprofileemp.html',
    controller: 'editprofilesempCtrl'
  });
}])

.controller('editprofilesempCtrl', [function() {

}]);