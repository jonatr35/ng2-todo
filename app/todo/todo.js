(function () {
  'use strict';

  angular
    .module('ng-todo')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['TodoStore'];

  function TodoController(TodoStore) {
    var vm = this;
    vm.priorityClass = priorityClass;

    (function constructor() {
      vm.tasks = TodoStore.all();      
    })();
    
    function priorityClass(task) {
      console.log(task.priority.toLowerCase());
      switch(task.priority.toLowerCase()) {
        case 'high':
          return 'bg-danger';
        case 'medium':
          return 'bg-warning';
        case 'low':
          return 'bg-info';
        default:
          return 'bg-default';
      }
    }
  };
  
})();