import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.styl']
})

export class TodoItemComponent implements OnInit {
  // @Input() item;
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  // define item's type

  constructor() { }

  ngOnInit() { }

  isComplete: boolean = false;

  completeItem() {
   this.isComplete = !this.isComplete;
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}
