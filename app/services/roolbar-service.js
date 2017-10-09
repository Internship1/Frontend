'use strict';

angular.module('myApp.ngrollbar', ['tandibar/ng-rollbar'])

.config(function(RollbarProvider) {
  RollbarProvider.init({
    accessToken: "e0fa40c219e1433da32c9bcaba2bc128",
    captureUncaught: true,
    payload: {
      environment: 'frontend'
    }
  });
});