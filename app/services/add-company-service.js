'use strict';

angular.module('myApp.addCompanyService', [])

.controller('addCompanyServiceCtrl', function($scope, $http) {
	//$scope.employer_id=null;
	$scope.company_name = null;
	$scope.company_contact = null;
	$scope.company_address = null;
	$scope.company_email = null;
	$scope.company_website = null;
	$scope.company_description = null;

	$scope.putCompany = function ( company_name, company_contact, company_address, company_email, company_website, company_description, company_logo) {
		var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
		var decoded = jwt_decode(tokenBearer);
		var userEndPoint = decoded.sub;
		var companyUrl = 'http://192.168.0.11:8080/api/companies/';
		var perintah= "/update";


		var data = {
		
			company_name:company_name,
			company_contact:company_contact,
			company_address:company_address,
			company_email:company_email,
			company_website:company_website,
			company_description:company_description,
			company_logo:company_logo,
			
		};

		//call service
		$http.post(companyUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				$scope.compMsg = "Company Succesfully Inserted !";
				$scope.compMsgStatus = response.status;
				if($scope.compMsgStatus == 200){
					console.log($scope.compMsg);
					window.location.href = "#!/empprofile"
				}
				
			},
				
				
			// else if fail
			function (response) {
			$scope.compMsg = "Insert Company Failed !";
			$scope.compMsgStatus = response.status;
			$scope.compMsgStatusText = response.statusText;
		});
	};
	
	
$scope.images;

    $scope.uploadImage = function() {
      var fd = new FormData();
      var images = dataURItoBlob($scope.images);
      fd.append('company_logo', images);
      $http.post(
          userEditStudentProfileUrl + userEndPoint + perintah,
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
.directive("readfile", [
  function() {
    return {
      scope: {
       readfile: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.readfile = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }
]);
