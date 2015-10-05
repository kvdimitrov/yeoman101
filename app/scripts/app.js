'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('yoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
        'LocalStorageModule'
  ]).config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ls');
    }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/todo', {
          templateUrl: 'views/todo.html',
          controller: 'TodoCtrl',
          controllerAs: 'todo'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
