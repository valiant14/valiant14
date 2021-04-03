import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(module => module.UserProfileModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./users-card/users-card.module').then(module => module.UsersCardModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./users-list/users-list.module').then(module => module.UsersListModule)
      }
      ,
      {
        path: 'add-users',
        loadChildren: () => import('./add-users/add-users.module').then(module => module.RegisterUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
