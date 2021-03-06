import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  --- EmployeeListComponent ------------------------------------------<br>

  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>

  <br>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeServie: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeServie.getEmployee();
  }

}
