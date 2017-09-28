'use strict';

angular.module('myApp.faqs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/faqs', {
    templateUrl: 'views/faqs/faqs.html',
    controller: 'FaqsCtrl'
  });
}])

.controller('FaqsCtrl', [function() {

}]);