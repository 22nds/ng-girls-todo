import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // replaces template
  // template: ``,
  styleUrls: ['./app.component.styl']
})

// define value to be displayed in the app in {{ title }}

export class AppComponent {

  title = 'TODO | DONE';
  userLoggedIn = false;  /// changes admin view
}