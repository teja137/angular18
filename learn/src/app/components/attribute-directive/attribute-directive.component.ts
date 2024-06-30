import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = "";
  isDiv2Active: boolean = false;
  num1: string = "";
  num2: string = "";
  isActive: boolean = false;
  ngClassColor: string = "ngClass";
  backCheck: string = "bc";
  searchValue: string = '';

  customStyle: any = {
    'color' : 'green',
    'background-color' : 'red',
    'width' : '200px',
    'height' : '200px',
    'border-radius':'50%'
  }

  mySpirit: any[] = [
    {
      number:1,totalPower: 7,gender: "male", name:"Pamula",story:"loop",feeling:"creator of everything", alive: true
    },
    {
      number:3,totalPower:3, gender: "male", name:"Prabhu",story:"normal",feeling:"feels unique but nothing", alive: false
    },
    {
      number:7,totalPower: 1,gender: "male", name:"Teja",story:"worst",feeling:"too much depression dead and losers life", alive: true
    }
]

  addRedClass(){
    this.div1BgColor = "bg-danger";
  }

  addBlueClass(){
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active;
  }

  changeColor(){
    this.backCheck = this.backCheck === 'bc' ? 'cb' : 'bc';
      }
  
}
