'use strict';

angular.module('myApp.controllerWorkers', [])

.controller('workerCards', ['$scope', function($scope) {
	$scope.workers = [
	{
		"workerId" : "1",
		"workerAvatar" : "assets/img/default-avatar.png",
		"workerName" : "Riyan Gandarma Putra",
		"workerUsername" : "riyangandarma",
		"workerDescription" : "Saya adalah seorang yang lorem ipsum dolor sit amet",
		"workerContact" : "(089)88893419",
		"workerEmail" : "gandarmariyan@gmail.com",
		"workerQualification" : "Good at Programming"
	},
	{
		"workerId" : "2",
		"workerAvatar" : "assets/img/default-avatar.png",
		"workerName" : "Mutiara Citra Wordstary",
		"workerUsername" : "wordstary",
		"workerDescription" : "Saya adalah seorang yang lorem ipsum dolor sit amet",
		"workerContact" : "(082)121010587",
		"workerEmail" : "mutiara.citra.tif414@polban.ac.id",
		"workerQualification" : "I'm so good at writting"
	},
	{
		"workerId" : "3",
		"workerAvatar" : "assets/img/default-avatar.png",
		"workerName" : "Hendro Saputro",
		"workerUsername" : "hendro",
		"workerDescription" : "Saya adalah seorang yang lorem ipsum dolor sit amet",
		"workerContact" : "(089)93421746",
		"workerEmail" : "xhendrosaputrox@gmail.com",
		"workerQualification" : "Good at serving"
	},
	{
		"workerId" : "4",
		"workerAvatar" : "assets/img/default-avatar.png",
		"workerName" : "Ikhsan Hari Wijayanto",
		"workerUsername" : "ikhsanhaw",
		"workerDescription" : "Saya adalah orang yang lorem ipsum dolor sit amet",
		"workerContact" : "(085)678354120",
		"workerEmail" : "ikhsanhaw@gmail.com",
		"workerQualification" : "I'm so good at hacking"
	},
	{
		"workerId" : "5",
		"workerAvatar" : "assets/img/default-avatar.png",
		"workerName" : "Hamzhya Salsatinnov Hairy",
		"workerUsername" : "salsatinnov",
		"workerDescription" : "Saya adalah orang yang lorem ipsum dolor sit amet",
		"workerContact" : "(098)867124321",
		"workerEmail" : "hamzhya.salsatinnov.tif15@polban.ac.id",
		"workerQualification" : "Good at mocking people"
	}
	]
}]);