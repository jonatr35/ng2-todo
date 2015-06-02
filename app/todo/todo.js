(function () {
  'use strict';

  angular
    .module('ng-todo')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['TodoStore'];

  function TodoController(TodoStore) {
    var vm = this;

    (function constructor() {
      vm.tasks = TodoStore.all();
      console.log(vm);
    })();
  };
  
})();