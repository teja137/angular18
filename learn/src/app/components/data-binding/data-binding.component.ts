import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  //string, number, boolean. date

  courseName: string = "Angular 18";
  inputType = "checkbox";
  rollNo: number = 137;
  isUniversal: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-danger";
  stateName: string = "lovers";

  firstName = signal("Prabhu Teja");

  constructor() {


  };

  showAlert(message: string){
    alert(message);
  }

  changeCourseName() {
    this.courseName = "React JS";
  }

  changefirstName(){
    this.firstName.set("Universe")
  }
}
