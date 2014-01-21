'use strict';

angular.module('crpCMSapp.controllers', []).
  
  //
  //  PARENT CONTROLLER
  //
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
      $scope.$broadcast('updateProject', project);
    };

    $scope.$on('addProject', function() {
      ProjectServices.getProjects().then(parseSideBar);
    });


  }).
  
  //
  //  ADD PROJECTS CONTROLLER CONTROLLER
  //
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
  
  //
  //  UPDATE PROJECTS CONTROLLER
  //
  controller('UpdateProjectCtrl', function($scope, ProjectServices) {

    $scope.$on('updateProject', function(event, project) {
      console.log(project);
      console.log($scope);
      $scope.updateFormData.title = project.title;
      $scope.updateFormData.client = project.client;
      $scope.updateFormData.description = project.description;
      $scope.updateFormData.scope = project.scope;
    });
  
  }).

  //
  //  REMOVE PROJECTS CONTROLLER
  //
  controller('RemoveProjectCtrl', function($scope, ProjectServices) {

  }).

  //
  //  REORDER CONTROLLER
  //
  controller('ReorderProjectCtrl', function($scope, ProjectServices) {

  }).

  //
  //  LOGIN CONTROLLER
  //
  controller('loginCtrl', function($scope) {
    // ...
  });


