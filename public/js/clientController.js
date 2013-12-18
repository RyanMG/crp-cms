'use strict';

angular.module('crpCMSapp.controllers', []).
  controller('AppCtrl', function($scope, ProjectServices) {
    $scope.projects = ProjectServices.getProjects();
  }).

  controller('loginCtrl', function($scope) {
    // ...
  });


