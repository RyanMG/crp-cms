'use strict';

// Declare app level module which depends on filters, and services

angular.module('crpCMSapp', [
  'crpCMSapp.controllers',
  'crpCMSapp.filters',
  'crpCMSapp.services',
  'crpCMSapp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/add', {
      templateUrl: 'pages/add',
      controller: 'MyCtrl1'
    }).
    when('/update', {
      templateUrl: 'pages/update',
      controller: 'MyCtrl2'
    }).
    when('/remove', {
      templateUrl: 'pages/remove',
      controller: 'MyCtrl3'
    }).
    when('/reorder', {
      templateUrl: 'pages/reorder',
      controller: 'MyCtrl4'
    }).
    otherwise({
      redirectTo: '/add'
    });

  $locationProvider.html5Mode(true);
});
