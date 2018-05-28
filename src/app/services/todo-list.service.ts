import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [];


@Injectable()
export class TodoListService {

  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    // take data form local storage or display default list 
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    // var len = this.todoList.length + 1;
    var timestamp : string
    timestamp = String(new Date().getTime())
    var updatedItem : TodoItem
    updatedItem= {title: item.title, id: timestamp, completed: false}
    this.todoList.push(updatedItem);
    //this.storageService.setData(todoListStorageKey, this.todoList);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    //this.storageService.setData(todoListStorageKey, this.todoList);
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
