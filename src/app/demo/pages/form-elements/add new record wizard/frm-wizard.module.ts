import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmWizardRoutingModule } from './frm-wizard-routing.module';
import { FrmWizardComponent } from './frm-wizard.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {ArchwizardModule} from 'angular-archwizard';
import {WizardNavbarLgIconComponent} from './wizard-navbar-lg-icon/wizard-navbar-lg-icon.component';


@NgModule({
  imports: [
    CommonModule,
    FrmWizardRoutingModule,
    SharedModule,
    ArchwizardModule
  ],
  declarations: [
    FrmWizardComponent,
    WizardNavbarLgIconComponent,

  ]
})
export class FrmWizardModule { }
