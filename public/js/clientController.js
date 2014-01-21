'use strict';

angular.module('crpCMSapp.controllers', []).
  
  controller('AppCtrl', function($scope, $location, ProjectServices) {
  
    var parseSideBar = function(data) {
      $scope.theatricalProjects = {}, $scope.homeEntProjects = {}, $scope.gamingProjects = {};
      data.forEach(function(project) {
        if (project.projectCode === 'theatrical') {
          $scope.theatricalProjects[project.title] = project;
        } else if (project.projectCode === 'homeEnt') {
          $scope.homeEntProjects[project.title] = project;
        } else {
          $scope.gamingProjects[project.title] = project;
        }
      });
    };
    
    ProjectServices.getProjects().then(parseSideBar);
    
    $scope.loadProject = function(project) {
      $location.path('/update');

    };

    $scope.$on('addProject', function() {
      ProjectServices.getProjects().then(parseSideBar);
    });


  }).
 
  controller('AddProjectCtrl', function($scope, ProjectServices) {
    $scope.addFormData = {};
    
    $scope.processForm = function() {
      ProjectServices.addProject($scope.addFormData).then(function(result) {
        $scope.clearForm();
        if (!isNaN(parseInt(result, 10))) {
          $scope.$emit('addProject');
        } else {
          $scope.error = result;
          $scope.isError = true;
        }
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


