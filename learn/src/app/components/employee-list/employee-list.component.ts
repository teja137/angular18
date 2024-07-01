import { Component } from '@angular/core';
import { sayHi, warn } from 'project';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  
  callBackend(){
    sayHi();
    console.log(warn);
  }

}
