import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicElementsRoutingModule } from './basic-elements-routing.module';
import { BasicElementsComponent } from './basic-elements.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';
import {SelectModule} from 'ng-select';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    BasicElementsRoutingModule,
    SharedModule,
    SelectModule,
    ScrollingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  declarations: [BasicElementsComponent, ModalBodyComponent],
  providers: [SelectOptionService]
})
export class BasicElementsModule { }
