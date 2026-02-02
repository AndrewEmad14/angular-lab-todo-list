import { Component } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';
import TodoModel from '../dataModel/TodoModel';
@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoList, TodoForm],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css',
})
export class TodoWrapper {
  todos: TodoModel[] = [];
  addTodo(task: string) {
    // Use the spread operator to create a new array reference
    this.todos = [...this.todos, { task: task, completed: false }];
  }

  deleteTodo(index: number) {
    // Use filter to create a new array without the deleted item
    this.todos = this.todos.filter((_, i) => i !== index);
  }
}
