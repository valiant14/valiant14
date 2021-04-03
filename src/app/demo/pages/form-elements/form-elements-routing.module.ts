import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
       {
         path: 'add new record wizard',
         loadChildren: () => import('./add new record wizard/frm-wizard.module').then(module => module.FrmWizardModule)
      },
      {
        path: 'sampleform01',
         loadChildren: () => import('./sampleform01/basic-elements.module').then(module => module.BasicElementsModule)
       },
      {
        path: 'sample-page',
        loadChildren: () => import('./sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'samplepage2',
        loadChildren: () => import('./sample-page2/sample-page2.module').then(module => module.SamplePage2Module)
      },
      {
        path: 'dateDatafill',
        loadChildren: () => import('./sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'Alert',
        loadChildren: () => import('./Front-End Test - Angular/Alert/sample-page.module').then(module => module.SamplePageModule)
     },
     {
       path: 'Datetime',
       loadChildren: () => import('./Front-End Test - Angular/Datetime/sample-page.module').then(module => module.SamplePageModule)
      },
     {
       path: 'Dropdown datafill',
       loadChildren: () => import('./Front-End Test - Angular/Dropdown datafill/sample-page.module').then(module => module.SamplePageModule)
     },
     {
       path: 'login template',
       loadChildren: () => import('./Front-End Test - Angular/login template/sample-page.module').then(module => module.SamplePageModule)
     },
     {
       path: 'Pop-up form',
       loadChildren: () => import('./Front-End Test - Angular/Pop-up form/sample-page.module').then(module => module.SamplePageModule)
     },
     {
      path: 'Saving data',
      loadChildren: () => import('./Front-End Test - Angular/Saving data/sample-page.module').then(module => module.SamplePageModule)
   },
   {
     path: 'Search Form',
     loadChildren: () => import('./Front-End Test - Angular/Search Form/sample-page.module').then(module => module.SamplePageModule)
    },
   {
     path: 'Table action',
     loadChildren: () => import('./Front-End Test - Angular/Table action/sample-page.module').then(module => module.SamplePageModule)
   },
   {
     path: 'Table datafill',
     loadChildren: () => import('./Front-End Test - Angular/Table datafill/sample-page.module').then(module => module.SamplePageModule)
   },
   {
     path: 'Textbox datafill',
     loadChildren: () => import('./Front-End Test - Angular/Textbox datafill/sample-page.module').then(module => module.SamplePageModule)
   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }
