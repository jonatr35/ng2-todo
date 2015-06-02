export class TodoStore {
	namespace = 'todo.store';
	store = [];

	constructor() {
		this.store = JSON.parse(window.localStorage.getItem(this.namespace));
	}
	
	getAll() {
		return this.store;
	}
}
