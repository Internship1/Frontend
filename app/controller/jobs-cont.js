'use strict';

angular.module('myApp.controllerJobs', [])

.controller('jobCards', ['$scope', function($scope) {
	$scope.jobs = [
	{
		"companyIcon" : " ",
		"companyName" : "Boarding Labs",
		"companyAddress" : "Jl. Matrapersada no. 16",
		"companyDesc" : "Adalah sebuah perusahaan yang bergerak di bidang IT Consultant, Software Development, Graphic Design, Dll.",
		"companyContact" : "(022)20270135",
		"companyEmail" : "contact@boardinglabs.com",
		"companyJobAvail" : "Lowongan Sebagai Barista Kantor"
	},
	{
		"companyIcon" : " ",
		"companyName" : "Multi Power Synergy",
		"companyAddress" : "Jl. Lemah Nendeut No. 10B",
		"companyDesc" : "Adalah Perusahaan yang bergerak di bidang Bussiness Development",
		"companyContact" : "0819 4545 1331",
		"companyEmail" : "hrdmultipowersynergy@gmail.com",
		"companyJobAvail" : "Lowongan Sebagai Resepsionis"
	},
	{
		"companyIcon" : " ",
		"companyName" : "PERUM JASA TIRTA II",
		"companyAddress" : "Jl. Balaikota Cimahi",
		"companyDesc" : "Adalah salah satu Badan Usaha Milik Negara yang bergerak di bidang pengelolaan sumber daya air.",
		"companyContact" : "089 3000 743",
		"companyEmail" : "rekrutmen-2017@pjt2.com",
		"companyJobAvail" : "Lowongan sebagai Office Boy"
	},
	{
		"companyIcon" : " ",
		"companyName" : "Dipro Solusi",
		"companyAddress" : "Komp. Permata Buah Batu Blok D No. 13",
		"companyDesc" : "Adalah konsultan sumber daya manusia vendor dari Bank BUMN Terkemuka",
		"companyContact" : "0821 1287 6548",
		"companyEmail" : "diprosolusi@live.com",
		"companyJobAvail" : "Lowongan sebagai Marketing Sales"
	}, 
	{
		"companyIcon" : " ",
		"companyName" : "PT. BLOSSOM",
		"companyAddress" : "Jl. Batununggal Indah V No. 65",
		"companyDesc" : "Adalah perusahaan yang bergerak dibidang pergudangan",
		"companyContact" : "(022)2057864",
		"companyEmail" : "hrdblossom@rocketmail.com",
		"companyJobAvail" : "Lowongan sebagai pramusaji kantin kantor"
	}
	]
}]);

// 'use strict';

// angular.module('myApp.valStudentCtrl', [])

// .controller('valStudentController', ['$scope', '$http', function($scope, $http) {
//   $http.get("https://192.168.0.20/api/students").then(function (response) {
//       $scope.students = response.data.records;
// 	  $scope.msg = response.status;
// 	  $scope.msgtext = response.statusText;
//   });
// }]);