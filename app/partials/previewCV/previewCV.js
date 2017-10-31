'use strict';

angular.module('myApp.previewCV', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/previewCV', {
    templateUrl: 'partials/previewCV/previewCV.html',
    controller: 'addCVsCtrl'
  });
}])

.controller('addCVsCtrl', [function() {

}]);