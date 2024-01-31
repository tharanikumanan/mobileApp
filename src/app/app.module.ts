import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
