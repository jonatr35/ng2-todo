(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ng2TodoApp
   * @description
   * # ng2TodoApp
   *
   * Main module of the application.
   */
  angular
    .module('ng-todo', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'todo/todo-list.html',
      controller: 'TodoController',
      controllerAs: 'vm'
    })
      .otherwise({
      redirectTo: '/'
    });
  });

})();