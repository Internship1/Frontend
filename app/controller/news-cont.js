'use strict';

angular.module('myApp.controllerNews', [])

.controller('newsFeed', ['$scope', function($scope) {
	$scope.greenNotification = 'BoardingLabs, CV';
	$scope.greenDescription = 'just posted a new job';
	$scope.redNotification = 'Be Careful !';
	$scope.redDescription = 'of fake employers, research before apply !';
	$scope.blueNotification = 'Update';
	$scope.blueDescription = 'Part Time Job Seeker will be Updated Soon !';
	$scope.yellowNotification = 'Warning !';
	$scope.yellowDescription = 'this website use cookies';
	$scope.greyNotification = 'Warunk Upnormal';
	$scope.greyDescription = 'Will be hiring soon !';
}])