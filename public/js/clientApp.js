'use strict';

// Declare app level module which depends on filters, and services

angular.module('crpCMSapp', [
  'crpCMSapp.controllers'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/add', {
      templateUrl: 'pages/add',
      controller: 'AppCtrl'
    }).
    when('/update', {
      templateUrl: 'pages/update',
      controller: 'AppCtrl'
    }).
    when('/remove', {
      templateUrl: 'pages/remove',
      controller: 'AppCtrl'
    }).
    when('/reorder', {
      templateUrl: 'pages/reorder',
      controller: 'AppCtrl'
    }).
    otherwise({
      redirectTo: '/add'
    });

  $locationProvider.html5Mode(true);
});
