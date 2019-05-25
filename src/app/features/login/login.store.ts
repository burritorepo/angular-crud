import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  loginReducer
} from './store';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('login', loginReducer)],
  exports: [StoreModule],
  providers: []
})
export class LoginStoreModule { }