'use strict';

angular.module('crpCMSapp.controllers', []).
  controller('AppCtrl', function($scope, ProjectServices) {
    ProjectServices.getProjects().then(function(data) {
      $scope.allProjects = data;
    });
  }).
 
  controller('AddProjectCtrl', function($scope, ProjectServices) {
    $scope.addFormData = {};
    
    $scope.processForm = function() {
      ProjectServices.addProject($scope.addFormData).then(function(result) {
        console.log(result);
      });
    };

    $scope.isUnchanged = function() {
      return angular.equals($scope.addFormData, {});
    };

    $scope.clearForm = function() {
      $scope.addFormData = {};
      $scope.addFormData.projectType = "0";
      $scope.addFormData.scope = "0";
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


