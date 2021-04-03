import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterUserComponent} from './add-users.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUserRoutingModule { }
