import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {

  showLight: boolean = false;
  conditionalOperationText1: string = '';
  conditionalOperationText2: string = '';
  isChecked: boolean = false;
  life: string = "";
  myself: string[] = ["happy","sad","lost","confused","universal"]
  mySpirit: any[] = [
    {
      number:1,name:"Pamula",story:"loop",feeling:"creator of everything"
    },
    {
      number:3,name:"Prabhu",story:"normal",feeling:"feels unique but nothing"
    },
    {
      number:7,name:"Teja",story:"worst",feeling:"too much depression dead and losers life"
    }
]

  showShowLight(){
    this.showLight = true;
  }

  hideShowLight(){
    this.showLight = false;
  }

  changeOnClickShowLight(){
    this.showLight = !this.showLight;

    //this same equivalent to one line of code...
    // if(this.showLight == false){
    //   this.showLight = true
    // } else {
    //   this.showLight = false
    // }
  }

}
