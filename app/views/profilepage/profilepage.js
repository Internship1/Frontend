'use strict';

angular.module('myApp.profilepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profilepage', {
    templateUrl: 'views/profilepage/profilepage.html',
    controller: 'ProfilepageCtrl'
  });
}])

.controller('ProfilepageCtrl', [function() {

}]);