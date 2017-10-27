'use strict';

angular.module('myApp.editCompanyProfileService', [])

.controller('editCompanyProfileServiceCtrl',  function($scope, $http) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditCompanyProfileUrl = 'http://192.168.0.16:8080/api/companies/';
	var perintah= "/update"

	$http({
		method: "GET",
		url: userEditCompanyProfileUrl + userEndPoint
	}).then(function successCallBack(response) {
		$scope.compDetail= response.data.employerJobs.company;
		//console.log($scope.compDetail);
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.editCompanyProfile = function(company_name, company_contact, company_address, company_email, company_website,company_description,company_logo) {
		var data = {
			company_name:company_name,
			company_contact:company_contact,
			company_address:company_address,
			company_email:company_email,
			company_website:company_website,
			company_description:company_description,
			company_logo:company_logo
			
		};
		// call service
		//$http.put('http://192.168.0.16:8080/api/usersProfile/{user_id}/update', JSON.stringify(data)).then(function(response) {
			//if(response.data)
			//	$scope.regMsg = "Register as Employer Succesfull !";
			//	$scope.regMsgStatus = response.status;
			//	window.location.href = "#!/companyprofile"
			//}, //else if fail
			//function (response) {
			//$scope.regMsg = "Register as Employer Failed !";
			//$scope.regMsgStatus = response.status;
			//$scope.regMsgStatusText = response.statusText;
		//});
	//};
//});

		//call service
		$http.post(userEditCompanyProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/empprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};
$scope.company_logo;

    $scope.uploadImage = function() {
      var fd = new FormData();
      var company_logo = dataURItoBlob($scope.company_logo);
      fd.append('company_logo', company_logo);
      $http.post(
          userEditCompanyProfileUrl + userEndPoint + perintah,
          fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined,
              'method':'PUT'
            }
          }
        )
        .success(function(response) {
          console.log('success', response);
        })
        .error(function(response) {
          console.log('error', response);
        });
    }


    //you need this function to convert the dataURI
    function dataURItoBlob(dataURI) {
      var binary = atob(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
        type: mimeString
      });
    }

  })
.directive("filereads", [
  function() {
    return {
      scope: {
        filereads: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.filereads = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }
]);
