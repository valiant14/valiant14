import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplePage2Component} from './sample-page2.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePage2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePage2RoutingModule { }
