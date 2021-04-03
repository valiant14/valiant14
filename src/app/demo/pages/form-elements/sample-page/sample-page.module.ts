import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TagInputModule} from 'ngx-chips';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';
import {SelectModule} from 'ng-select';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    NgxPaginationModule,
    TagInputModule,
    Ng2SearchPipeModule,
    SelectModule,
    NgbDatepickerModule
  ],
  providers: [SelectOptionService]
})
export class SamplePageModule { }
