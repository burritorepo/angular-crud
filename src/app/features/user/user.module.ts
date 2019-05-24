import { NgModule } from '@angular/core';

import { ActionReducerMap } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import {
  counterReducer
} from './store'
export const UserReducerModule = {
  users: counterReducer
};
export enum IsvFeature {
  Users = 'users',
}

import { SharedModule } from '../shared/shared.module';
import { USER_COMPONENTS } from './components';
import { UserRoutingModule } from './user.routing.module';
import { UserService } from '../../api';
@NgModule({
  declarations: [...USER_COMPONENTS],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature(IsvFeature.Users, UserReducerModule)
    // EffectsModule.forFeature(IsvEffects),
  ],
  exports: [],
  providers: [UserService],
})
export class UserModule { }