import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
  --- app-teste 3 ------------------------------------------<br>

  <h2>{{"hello " + nameParent}}</h2>
  <button (click)="fireEvent()">Send Event</button>

  <br>

  <h2>{{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | slice:3:5 }}</h2>
  <h2>{{ person | json }}</h2>
  
  <br>

  <h2>{{ 5.6789 | number:'1.2-3' }}</h2>
  <h2>{{ 5.678 | number:'1.2-3' }}</h2>
  <h2>{{ 5.678 | number:'3.4-5' }}</h2>
  <h2>{{ 5.678 | number:'3.1-2' }}</h2>
  <h2>{{ 5.674 | number:'3.1-2' }}</h2>
  <h2>{{ 5.675 | number:'3.1-2' }}</h2>
  
  <h2>{{ 0.25 | percent }}</h2>
  
  <h2>{{ 0.25 | currency }}</h2>
  <h2>{{ 0.25 | currency:'GBP' }}</h2>
  <h2>{{ 0.25 | currency: 'GBP': 'code' }}</h2>
  <h2>{{ 0.25 | currency: 'EUR' }}</h2>
  <h2>{{ 0.25 | currency: 'EUR': 'code' }}</h2>

  <br>

  <h2>{{ date }}</h2>
  <h2>{{ date | date: 'short' }}</h2>
  <h2>{{ date | date: 'shortDate' }}</h2>
  <h2>{{ date | date: 'shortTime' }}</h2>

  <br>
  `,
  styles: []
})
export class Test3Component implements OnInit {

  public date = new Date();

  public name = "Codevolution";
  public message = "Welcome to codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  @Input('parentData') public nameParent;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey codevolution');
  }

}
