import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styleUrls:['calculator.css']
})
export class CalculatorPage {
  feet: number;
  inches: number;
  totalinches: number;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
  gender: string;
  message: string;
  genderstring: string;

  constructor(public navCtrl: NavController) {

  }
calculateIBW(){
  this.totalinches = ((this.feet-5)*12)+1*this.inches;

  if (this.gender == "m" && this.feet >= 5){
    this.genderstring = "Male"
    this.robinson = 52 + (1.9*this.totalinches)
    this.miller = 56.2 + (1.41*this.totalinches)
    this.hamwi = 48 + (2.7*this.totalinches)
    this.devine = 50 + (2.3*this.totalinches)
  }
  else if (this.gender == "f" && this.feet >= 5){
    this.genderstring = "Female"
    this.robinson = 49 + (1.7*this.totalinches)
    this.miller = 53.1 + (1.36*this.totalinches)
    this.hamwi = 45.5 + (2.2*this.totalinches)
    this.devine = 45.5 + (2.3*this.totalinches)
  }
  else {
    this.genderstring == "Error"
    this.robinson = 0
    this.miller = 0
    this.hamwi = 0
    this.devine = 0
  }

  this.robinson = parseFloat(this.robinson.toFixed(2))
  this.miller = parseFloat(this.miller.toFixed(2))
  this.hamwi = parseFloat(this.hamwi.toFixed(2))
  this.devine = parseFloat(this.devine.toFixed(2))


  }
}


