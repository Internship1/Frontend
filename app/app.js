'use strict';

var app = angular
  .module('myApp', [
    'ngRoute',
    /*Views Declared Here */
    'myApp.home',
    'myApp.filterjobs',
    'myApp.categoryjobs',
    'myApp.companyprofile',
    'myApp.registeremp',
    'myApp.registerstud',
    'myApp.studentprofile',
    'myApp.empprofile',
    'myApp.loginstud',
    'myApp.loginemp',
    'myApp.contactus',
    'myApp.editprofilestud',
    'myApp.editprofileemp',
    'myApp.addjobs',
    'myApp.addcompany',
    'myApp.selectcategoryjob',

    
    'myApp.version',
    /*Controllers Declared Here*/
    
    'myApp.httpCheck',
    'myApp.controllerCheck',
    'myApp.controllerJobs',
    'myApp.controllerNews',
    'myApp.controllerWorkers',
    'myApp.postRegister',
    'myApp.submitExample',
    'myApp.postTest',
    /*Service Declared Here*/
    'myApp.studRegisterService',
    'myApp.emplRegisterService',
    'myApp.addMoreJobsService',
    'myApp.composeMailService',
    'myApp.getAllStudentService',
    'myApp.getAllEmployerService',
    'myApp.loginAuthService',
    'myApp.getMyProfileService',
    'myApp.editStudentProfileService',
    'myApp.editEmpProfileService',
    'myApp.editCompanyProfileService',
    'myApp.getMyCompanyService',
    'myApp.getAllCompaniesService',
    'myApp.getAllJobsService',
    //'myApp.getMyJobService',
    'myApp.addCompanyService',
    //'myApp.sessionService'
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
