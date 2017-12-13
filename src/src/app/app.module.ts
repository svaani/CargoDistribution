import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient,HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import {TransityInterceptor} from './transity.interceptor'

import { AppComponent } from './app.component';
import { TriplistComponent } from './triplist/triplist.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from './material.module';
import { IonicApp, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ItabsComponent } from './ionic/itabs/itabs.component';


@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    LoginComponent,
    ItabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    IonicModule.forRoot(AppComponent),
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TransityInterceptor,
    multi : true
  },{
    provide : AuthService,
    useClass : AuthService,
    deps : []
  }],
  bootstrap: [IonicApp]
})
export class AppModule { }
