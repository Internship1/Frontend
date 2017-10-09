'use strict';

angular.module('myApp.editjobemployer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editjobemployer/:id/update', {
    templateUrl: 'partials/editjobemployer/editjobemployer.html',
    controller: 'editjobemployerCtrl'
  });
}])

.controller('editjobemployerCtrl', [function() {

}]);