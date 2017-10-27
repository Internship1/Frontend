'use strict';

angular.module('myApp.addCV', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile/addCV/:id', {
    templateUrl: 'partials/addCV/addCV.html',
    controller: 'addCVCtrl'
  });
}])

.controller('addCVCtrl', [function() {

}]);