'use strict';

angular.module('crpCMSapp.controllers', []).
  controller('AppCtrl', function($scope, ProjectServices) {
    $scope.projects = ProjectServices.getProjects();
  }).
 
  controller('AddProjectCtrl', function($scope, ProjectServices) {

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


