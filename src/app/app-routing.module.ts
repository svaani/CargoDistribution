import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriplistComponent } from './triplist/triplist.component'
import { LoginComponent } from './login/login.component'
import {AuthManager} from './authmanager';


const routes: Routes = [
  {
  path:'triplist',
  component: TriplistComponent
 
},{
  path : 'login',
  component:LoginComponent, 
  canActivate: [AuthManager]
},{
  path: '', 
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



export const appRoutes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'login', component:LoginComponent, canActivate: [AuthManager]}
];

export const AppRouterProvider = RouterModule.forRoot(appRoutes);