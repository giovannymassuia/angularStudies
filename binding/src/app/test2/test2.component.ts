import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  --- app-teste 2 ----<br>

  <input [(ngModel)]="name" type="text">
  {{name}}
  <br>

  <h2 *ngIf="displayName; else elseBlock">
    Codevolution ngIf
  </h2>

  <ng-template #elseBlock>
    <h2>
      name is hidden
    </h2>
  </ng-template>

  <br>

  <div *ngIf="displayName; then thenBlock; else elseBlock2"></div>

  <ng-template #thenBlock>
    <h2>thenBlock</h2>
  </ng-template>

  <ng-template #elseBlock2>
    <h2>elseBlock</h2>
  </ng-template>

  <br>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

  <br>

  <div *ngFor="let color of colors; index as i; odd as o; even as e; first as f; last as l">
    <p [style.color]="color">index={{i}} - odd={{o}} - even={{e}} - first={{f}} - last={{l}} - {{color}}</p>
  </div>

  <br>
  `,
  styles: []
})
export class Test2Component implements OnInit {

  public colors = ["red", "blue", "green", "orange"];

  public name = "";
  public displayName = true;

  public color = "orange";

  constructor() { }

  ngOnInit() {
  }

}
