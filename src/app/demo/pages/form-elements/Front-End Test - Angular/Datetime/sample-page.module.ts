import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    AmazingTimePickerModule,
    ColorPickerModule,
    NgbDatepickerModule

  ]
})
export class SamplePageModule { }
