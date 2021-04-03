import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePage2RoutingModule } from './sample-page2-routing.module';
import { SamplePage2Component } from './sample-page2.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TagInputModule} from 'ngx-chips';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';
import {SelectModule} from 'ng-select';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SamplePage2Component],
  imports: [
    CommonModule,
    SamplePage2RoutingModule,
    SharedModule,
    NgxPaginationModule,
    TagInputModule,
    Ng2SearchPipeModule,
    SelectModule,
    NgbDatepickerModule
    

  ],
  providers: [SelectOptionService]
})
export class SamplePage2Module { }
