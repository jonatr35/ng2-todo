(function () {
  'use strict';
  
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