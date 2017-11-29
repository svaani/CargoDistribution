import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriplistComponent } from './triplist/triplist.component'

const routes: Routes = [{
  path:'triplist',
  component: TriplistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
