import { Component } from '@angular/core';

import { NgModule } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  template: `
  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rootPage = LoginComponent;
  title = 'app';
}
