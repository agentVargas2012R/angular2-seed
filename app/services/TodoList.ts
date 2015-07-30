export class TodoList {
	todos = [new Todo(1, "Register", false), new Todo(2, "Attend", false)];

	add(todo){
		this.todos.push(todo);
	}

	get(){
		return this.todos;
	}

}

export class Todo {
  constructor(public key: number, public title: string, public completed: boolean) { }
}
