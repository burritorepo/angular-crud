import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  userReducer,
  UserEffects
} from './store';
import { UserService } from '../../api';
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [],
  providers: [UserService]
})
export class UserStoreModule { }