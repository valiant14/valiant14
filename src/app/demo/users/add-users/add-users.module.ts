import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserRoutingModule } from './add-users-routing.module';
import { RegisterUserComponent } from './add-users.component';



@NgModule({
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    FormsModule,

  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }
