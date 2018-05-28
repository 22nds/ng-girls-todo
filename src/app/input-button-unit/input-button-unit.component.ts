import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.styl']
})

export class InputButtonUnitComponent implements OnInit { 


  title:string;

  // property title
  // title = 'Hello World!';
  // title = parseInt(Math.random() * 100 );  // #3

  // #4
  // changeTitle(newTitle: string) {
  //   this.title = newTitle;
  // }

  /*
  generateTitle(): string {
    return 'Method Title';
  }
  */
  
  constructor() { 
    this.title = '';   // #1
   // this.changeTitle('My First Angular App'); // #4
   //  console.log(this.title);
  }

  ngOnInit() {
    // this.title = 'Angular CLI Rules!'; // #2
   
   /* setTimeout(() => {
      this.title = 'Updated title';
    }, 2000);
    */
  }

  /*
  changeTitle_OLD(newTitle: string) {
    this.title = newTitle;
  }
  */

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle : string) {
    // this.title = newTitle;
    this.submit.emit(newTitle);
    // clear input field
    document.getElementById("todo-input").value = '';
  }

  // seeRef(inputElementReference) {
  //   console.log(inputElementReference);
  //   this.title = inputElementReference.value;
  // }
}
