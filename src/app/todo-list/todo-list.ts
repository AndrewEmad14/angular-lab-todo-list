import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import TodoModel from '../dataModel/TodoModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnChanges,OnInit{
  @Input() todos: TodoModel[] = [];
  todosDo: TodoModel[] = [];
  todosDone: TodoModel[] = [];

  @Output() deleteTodo = new EventEmitter<number>();
  toggle(task: TodoModel) {
    task.completed = !task.completed;
    this.updateTodos();
  }
  deleteTask(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.deleteTodo.emit(index);
    }
    this.updateTodos()
  }
ngOnChanges(changes: SimpleChanges) {  // ← ADD SimpleChanges parameter

    console.log('Input todos:', this.todos);
    this.updateTodos();
  }

  ngOnInit() {
  
    this.updateTodos();
  }

  updateTodos() {
  
    this.todosDo = this.todos.filter((todo) => !todo.completed);
    this.todosDone = this.todos.filter((todo) => todo.completed);

  }
}
