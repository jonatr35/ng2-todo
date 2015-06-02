import { ComponentAnnotation as Component, ViewAnnotation as View, bootstrap } from 'angular2/angular2';
import { TodoList } from './todo-list';

@Component({
    selector: 'todo-app'
})
@View({
    template: `
		<h1>
			Todo<small>&nbsp;with Angular 2.0 <span class="glyphicon glyphicon-thumbs-up"></span></small>
		</h1>

		<todo-list></todo-list>

		<footer class='text-center'>
			<nav class="navbar navbar-inverse navbar-fixed-bottom">
			  <div class="container">
    			<p>Created by:</p>
				<h3>{{name}}</h3>
			  </div>
			</nav>
		</footer>
	`,
	directives: [TodoList]
})
// Component Controller
export class TodoApp {
	name: string;

	constructor() {
		this.name = "Jon Rietveld";
	}
}

bootstrap(TodoApp);
