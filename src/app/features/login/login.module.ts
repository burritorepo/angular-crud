import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LOGIN_COMPONENTS } from './components';
import { LoginRoutingModule } from './login.routing.module';
import { AuthGuard } from '../../api';

@NgModule({
  declarations: [...LOGIN_COMPONENTS],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [],
  providers: [AuthGuard],
})
export class LoginModule { }