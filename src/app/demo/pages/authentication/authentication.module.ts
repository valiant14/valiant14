import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,

  ],
  declarations: []
})
export class AuthenticationModule { }
