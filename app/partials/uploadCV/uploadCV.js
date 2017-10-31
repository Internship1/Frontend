'use strict';

angular.module('myApp.uploadCV', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/uploadCV', {
    templateUrl: 'partials/uploadCV/uploadCV.html',
    controller: 'uploadCVCtrl'
  });
}])

.controller('uploadCVCtrl', [function() {

}]);