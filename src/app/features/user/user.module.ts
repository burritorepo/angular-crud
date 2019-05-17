import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { USER_COMPONENTS } from './components';
import { UserRoutingModule } from './user.routing.module';
import { UserService } from '../../api'
@NgModule({
  declarations: [...USER_COMPONENTS],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  exports: [],
  providers: [UserService],
})
export class UserModule { }