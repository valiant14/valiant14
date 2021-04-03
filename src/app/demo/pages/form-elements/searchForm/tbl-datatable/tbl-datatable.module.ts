import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblDatatableRoutingModule } from './tbl-datatable-routing.module';
import { TblDatatableComponent } from './tbl-datatable.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    TblDatatableRoutingModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    
  ],
  declarations: [TblDatatableComponent]
})
export class TblDatatableModule { }
