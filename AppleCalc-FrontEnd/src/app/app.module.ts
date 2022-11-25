import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CalcComponent } from './calc/calc.component';
import { MiniDisplayComponent } from './mini-display/mini-display.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    CalcComponent,
    MiniDisplayComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
