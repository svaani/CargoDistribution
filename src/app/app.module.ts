import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 
import {TransityInterceptor} from './transity.interceptor'

import { AppComponent } from './app.component';
import { TriplistComponent } from './triplist/triplist.component';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TransityInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
