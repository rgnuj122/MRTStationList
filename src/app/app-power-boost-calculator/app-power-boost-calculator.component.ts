import { Component, OnInit } from '@angular/core';
// import {exponentialStrength} from 'exponential-strength.pipe.ts';
@Component({
  selector: 'app-power-boost-calculator',
  // templateUrl: './app-power-boost-calculator.component.html',
  // styleUrls: ['./app-power-boost-calculator.component.css'],
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>Super Hero Power: {{power | exponentialStrength: factor}}</p>
  `
})
export class AppPowerBoostCalculatorComponent implements OnInit {
  power = 5;
  factor = 1;
  // constructor() { }

  ngOnInit(): void {
  }

}
