'use strict';

angular.module('myApp.addCV', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentprofile/addCV', {
    templateUrl: 'partials/addCV/addCV.html',
    controller: 'addCVCtrl'
  }).when('/uploadCV', {
    templateUrl: 'partials/uploadCV/uploadCV.html',
    controller: 'uploadCVCtrl'
  });
}])

.controller('addCVCtrl', [function() {

}]);