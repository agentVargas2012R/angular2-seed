/// <reference path="../../typings/jquery.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {TodoList} from '../../services/TodoList';
import {Todo} from '../../services/TodoList';

@Component({
  selector: 'TodoApp'
})
@View({
  templateUrl: './components/todoApp/todoApp.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class TodoApp {

  todoEdit: Todo = null;

  constructor(public todoList: TodoList) {}

  enterTodo(inputElement): void {
    this.addTodo(inputElement.value);
    inputElement.value = '';
  }

  editTodo(todo: Todo): void { 
    //debugger
    this.todoEdit = todo; 
  }

  addTodo(newTitle: string): void { 
    //debugger;
    this.todoList.add(new Todo(this.todoList.todos.length, newTitle, false)); 
  }

  completeMe($event, todo: Todo): void { 
    //debugger;
    todo.completed = !todo.completed;      
    $($event.target).prev().toggleClass('done-true');
  }

  toggleAll($event): void {
    var isComplete = $event.target.checked;
    this.todoList.todos.forEach((todo: Todo) => { todo.completed = isComplete; });
    $(".todo").toggleClass("done-true")
  }

}
