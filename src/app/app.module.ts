import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { NationalComponent } from './Comp/national/national.component';
import { NumberinputComponent } from './Comp/NumberInput/numberinput.component';

@NgModule({
  declarations: [
    AppComponent,
    NationalComponent,
    NumberinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
