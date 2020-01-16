import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      --- app-teste ----<br>

      <h2>
          Welcome {{name}}
      </h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name + name}}</h2>
      <h2>{{"name.length: " + name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{siteUrl}}</h2>

      <h2 class="text-success">Codevolution</h2>
      <h2 [class]="successClass">Codevolution</h2>
      <h2 class="text-special" [class]="successClass">Codevolution (it does not work)</h2>
      <h2 [class.text-danger]="hasError">Codevolution error</h2>

      <h2 [ngClass]="messageClasses">Codevolution</h2>

      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
      <h2 [style.color]="highlightColor">Style Binding2</h2>
      <h2 [ngStyle]="titleStyles">Style Binding3</h2>

      <input [id]="myId" type="text" value="Vishwas">
      <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Vishwas">
      <input bind-disabled="!isDisabled" id="{{myId}}" type="text" value="Vishwas">

      <button (click)="onClick($event)">Greet</button>
      <button (click)="greeting = 'Welcome 2...'">Greet</button>
      {{greeting}}

      <br>
      <br>
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>

  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Giovanny";
  public siteUrl = window.location.href;
  public myId = "testeId";
  public isDisabled = true;

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
