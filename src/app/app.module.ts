import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppPowerBoostCalculatorComponent } from './app-power-boost-calculator/app-power-boost-calculator.component';
import { FormsModule } from '@angular/forms';
import { PowerBoosterComponent} from './power-booster.component'
import {ExponentialStrengthPipe} from './exponential-strength.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AppPowerBoostCalculatorComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
