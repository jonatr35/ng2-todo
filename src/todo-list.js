import { ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import { TodoStore } from './todo-store';

@Component({
    selector: 'todo-list',
	injectables: [TodoStore]
})
@View({
    template: `
		<div class="container">
			<ul class="list-group">
			  <li *ng-for="#task of todos; #i = index" class="list-group-item">
			    <span class="badge">{{i+1}}</span>
			    {{task.name}}
			  </li>
			</ul>
		</div>
	`,
	directives: [NgFor]
})
// Component Controller
export class TodoList {	
	
	constructor() {
		this.store = new TodoStore();
		this.todos = this.store.getAll();
		console.log(this.todos);
	}
	
	getPriorityClass(task) {
		switch(task.priority) {
			case 1:
				return 'bg-primary';
			case 2:
				return 'bg-info';
			case 3:
				return 'bg-warning';
			case 4:
			case 5:
				return 'bg-danger';				
		}
	}
}
