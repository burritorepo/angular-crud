import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CommonModule } from '@angular/common';

import {
 UserComponent,
 CreateComponent,
 DetailComponent,
 EditComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: DetailComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
