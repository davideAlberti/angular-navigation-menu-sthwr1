import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PagineModule } from './pagine/pagine.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    MDBBootstrapModule.forRoot(),

    PagineModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }