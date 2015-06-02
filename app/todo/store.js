(function() {
	'use strict';
	
	angular
		.module('ng-todo')
		.factory('TodoStore', TodoStore);
	
	TodoStore.$inject = ['$window'];
	
	function TodoStore($window) {
		var namespace = 'todo.store';		
		var tasks = null;
		
		var services = {
			all: all,
			get: get,
			save: save,
			clear: clear
		};
		
		(function constructor() {
			tasks = JSON.parse($window.localStorage.getItem(namespace));
			if(!tasks) {
				tasks = [];
			}
		})();
		
		return services;
		
		function all() {
			return  tasks;
		}
		
		function get(index) {
			if(tasks === null) {
				all();
			}
			
			return tasks[index];
		}
		
		function save(task) {
			tasks.push(task);
			$window.localStorage.setItem(namespace, JSON.stringify(tasks));
		}
		
		function clear() {
			$window.localStorage.setItem(namespace, JSON.stringify([]));
		}
	}
})();