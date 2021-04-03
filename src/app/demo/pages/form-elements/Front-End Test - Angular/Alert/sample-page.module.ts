import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    SnotifyModule
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
  
})
export class SamplePageModule { }
