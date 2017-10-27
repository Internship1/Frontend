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
    'myApp.selectcompany',
    'myApp.editjobemployer',
    'myApp.editprofilecomp',
    'myApp.faq',
    'myApp.tos',
    'myApp.addCV',
    'myApp.studentprofileselected',
    'myApp.notif',
    'myApp.filterstudents',
    
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
    'myApp.angularjs-dropdown-multiselect',

    //factory
    'myApp.headerstoken',
    // 'myApp.isLoggedIn',
     // 'myApp.Session',

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
    'myApp.selectcompany',
    'myApp.getMyProfileStudentService',
    'myApp.editJobEmpService',
    'myApp.getAllPostingService',
    'myApp.getMyMailService',
    'myApp.getAllUsersService',
    'myApp.getAllFaqService',
    'myApp.getAllTosService',
    'myApp.addCVService',
    'myApp.studentprofileselected',
    'myApp.notifService',
    // 'myApp.ngrollbar',
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
