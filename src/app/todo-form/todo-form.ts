import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule
@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
    @Output() addTodo = new EventEmitter<string>();
    task:string=""
    add() {
    this.addTodo.emit(this.task);
      console.log("i am form")
      this.task=""
    }
}
