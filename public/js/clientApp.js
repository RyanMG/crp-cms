'use strict';

// Declare app level module which depends on filters, and services

angular.module('crpCMSapp', [
  'ngRoute',
  'crpCMSapp.controllers',
  'crpCMSapp.factories'
  //'crpCMSapp.directives'
]).
  config(function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/add', {
        templateUrl: 'pages/add',
        controller: 'AddProjectCtrl'
      }).
      when('/update', {
        templateUrl: 'pages/update',
        controller: 'UpdateProjectCtrl'
      }).
      when('/remove', {
        templateUrl: 'pages/remove',
        controller: 'RemoveProjectCtrl'
      }).
      when('/reorder', {
        templateUrl: 'pages/reorder',
        controller: 'ReorderProjectCtrl'
      }).
      otherwise({
        redirectTo: '/add'
      });

    $locationProvider.html5Mode(true);
  });
