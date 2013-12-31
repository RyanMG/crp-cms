'use strict';

angular.module('crpCMSapp.controllers', []).
  controller('AppCtrl', function($scope, ProjectServices) {
    $scope.allProjects = ProjectServices.getProjects();
    console.log($scope);
  }).
 
  controller('AddProjectCtrl', function($scope, ProjectServices) {
    $scope.clearForm = function() {
      event.preventDefault();
      console.log($scope);
    };
  }).

  controller('UpdateProjectCtrl', function($scope, ProjectServices) {

  }).

  controller('RemoveProjectCtrl', function($scope, ProjectServices) {

  }).

  controller('ReorderProjectCtrl', function($scope, ProjectServices) {

  }).
  controller('loginCtrl', function($scope) {
    // ...
  });


