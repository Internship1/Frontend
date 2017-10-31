'use strict';

angular.module('myApp.editStudentProfileService', ["checklist-model","angularFileUpload"])
// .directive('file', function () {
//     return {
//         scope: {
//             file: '='
//         },
//         link: function (scope, el, attrs) {
//             el.bind('change', function (event) {
//                 var file = event.target.files[0];
//                 scope.file = file ? file : undefined;
//                 scope.$apply();
//             });
//         }
//     };
// })

.controller('editStudentProfileServiceCtrl',  function($scope,  $http, ) {
		
	var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));
	console.log(tokenBearer);
	var decoded = jwt_decode(tokenBearer);
	console.log(decoded.sub);
	var userEndPoint = decoded.sub;
	var userEditStudentProfileUrl = 'http://192.168.0.13:8080/api/usersProfile/';
	var userEditProfileUrl = 'http://192.168.0.13:8080/api/users/';
	var qualifiesUrl = 'http://192.168.0.13:8080/api/qualifies/all';
	var perintah= "/update"
	
	

	$scope.editUser = function(full_name, email, gender, username) {
		
		var data = {
			full_name:full_name,
			email:email,
			gender:gender,
			username:username,
			//password:password,
			
			

		};
		

		//call service
		$http.put(userEditProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)

				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				//window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};

	// $scope.upload= function(images){
	// 	$http({
 //            method: 'PUT',
 //            url: userEditStudentProfileUrl + userEndPoint + perintah,
 //            headers: {
 //                'Content-Type': 'multipart/form-data'
 //            },
 //            data: {
               
 //                images: $scope.file
 //            },
 //            transformRequest: function (data, headersGetter) {
 //                var formData = new FormData();
 //                angular.forEach(data, function (value, key) {
 //                    formData.append(key, value);
 //                });

 //                var headers = headersGetter();
 //                delete headers['Content-Type'];

 //                return formData;
 //            }
 //        })
 //        .success(function (data) {

 //        })
 //        .error(function (data, status) {

 //        });
	// };

	$http({
		method: "GET",
		url:  qualifiesUrl
	}).then(function successCallBack(response) {
		$scope.qualifies = [];
		var k=0;
		var qualifie  = response.data.qualifies;
		
		  for (var i = 0; i <qualifie.length; i++) {
          
          
			 $scope.qualifies[k] = qualifie[i];
			 k=k+1;
           
          
         }
         console.log($scope.qualifies);
   			$scope.qualify_id =[];
	 
			$scope.checkAll = function() {
			  $scope.qualify_id.qualifies = $scope.qualifies.map(function(item) { return item.id; });
			};
			$scope.uncheckAll = function() {
			  $scope.qualify_id.qualifies = [];
			};
       
        
		
	}, function errorCallBack(response) {
		$scope.errorMessage = 'Ops, Something went wrong when displaying data!';
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	});

	$scope.editStudent = function(contact, address, description,  images,  qualify_id) {
		
		var data = {
			contact:contact,
			address:address,
			description:description,
			images:$scope.images,
			
			qualify_id:JSON.stringify($scope.qualify_id),

			
			

		};
		

		//call service
		$http.post(userEditStudentProfileUrl + userEndPoint + perintah, JSON.stringify(data)).then(function(response) {
			if (response.data)
				alert("User Profile Succesfully Edited");
				$scope.regMsg = "Details Succesfully Edited !";
				$scope.regMsgStatus = response.status;
				window.location.href = "#!/studentprofile"
			}, // else if fail
			function (response) {
				alert("Edited Failed");
			$scope.regMsg = "Details Failed !";
			$scope.regMsgStatus = response.status;
			$scope.regMsgStatusText = response.statusText;
		});
	};

	

	
 $scope.images;

    $scope.uploadImage = function() {
      var fd = new FormData();
      var images = dataURItoBlob($scope.images);
      fd.append('images', images);
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

    $scope.cv;

    $scope.uploadCV = function() {
      var fd = new FormData();
      var cv = dataURItoBlob($scope.cv);
      fd.append('cv', cv);
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
.directive("fileread", [
  function() {
    return {
      scope: {
        fileread: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.fileread = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }
]);
