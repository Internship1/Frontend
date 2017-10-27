'use strict';

angular.module('myApp.isLoggedIn', [])
.factory('Auth', function($rootScope){
  var tokenBearer = JSON.parse(localStorage.getItem("KEY_TOKEN"));

$rootScope.user;

return{
    setUser : function(tokenBearer){
        $rootScope.user = tokenBearer;
    },
    LoggedIn : function(){
        return(user)? user : false;
    }
  }
})