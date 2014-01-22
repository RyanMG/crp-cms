'use strict';

angular.module('crpCMSapp.controllers', []).
  
  //
  //  PARENT CONTROLLER
  //
  controller('AppCtrl', function($scope, $location, $timeout, ProjectServices) {
  
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
      if ($location.$$path === '/remove') {
        $scope.$broadcast('removeProject', project);
      } else {
        $location.path('/update');
        $timeout(function() {
          $scope.$broadcast('updateProject', project);
        }, 100);
      }
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
    $scope.updateFormData = {};

    $scope.$on('updateProject', function(event, project) {
      $scope.updateFormData.title = project.title;
      $scope.updateFormData.client = project.client;
      $scope.updateFormData.description = project.description;
      
      if (project.video) {
        $scope.updateFormData.video = true;
        $scope.updateForm.video.$modelValue = true;
        $scope.updateForm.video.$setViewValue(true);
        $scope.updateForm.video.$render();
      } else {
        $scope.updateFormData.video = false;
      }

      switch (project.projectType) {
        case 'Theatrical':
          $scope.updateFormData.projectType = '1';
          break;
        case 'Home Entertainment':
          $scope.updateFormData.projectType = '2';
          break;
        case 'Interactive Gaming':
          $scope.updateFormData.projectType = '3';
          break;
      }

      switch (project.scope) {
        case 'Creative':
          $scope.updateFormData.scope = '1';
          break;
        case 'Creative & Production':
          $scope.updateFormData.scope = '2';
          break;
        case 'Production Design':
          $scope.updateFormData.scope = '3';
          break;
        case 'Creative & Production Design':
          $scope.updateFormData.scope = '4';
          break;
        case 'Production':
          $scope.updateFormData.scope = '5';
          break;
      }
      $scope.tempFormValues = $scope.updateFormData;
    });
  
    $scope.clearForm = function() {
      $scope.updateFormData = {};
      $scope.updateFormData.projectType = "0";
      $scope.updateFormData.scope = "0";
    };

    $scope.checkUpdates = function() {
      console.log($scope.updateFormData);
    };
  }).

  //
  //  REMOVE PROJECTS CONTROLLER
  //
  controller('RemoveProjectCtrl', function($scope, ProjectServices) {
    $scope.removeFormData = "";
    $scope.currentProjectType = "";

    $scope.$on('removeProject', function(event, project) {
      $scope.removeFormData = project.title;
      $scope.currentProjectType = project.projectType;
    });

    $scope.clearForm = function() {
      $scope.removeFormData = "";
      $scope.currentProjectType = "";
    };

    $scope.hasValue = function() {
      return angular.equals($scope.removeFormData.title, "");
    };

    $scope.removeSelected = function() {
      ProjectServices.removeProject($scope.removeFormData, $scope.currentProjectType).then(function(data) {
        console.log(data);
      });
    }

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


