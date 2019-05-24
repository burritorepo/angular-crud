import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { USER_COMPONENTS } from './components';
import { UserRoutingModule } from './user.routing.module';
@NgModule({
  declarations: [...USER_COMPONENTS],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  exports: [],
  providers: [],
})
export class UserModule { }