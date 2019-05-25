import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserStoreModule } from './features/user';
import { LoginStoreModule } from './features/login'
import { UserService } from './api';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, { metaReducers: [] }),
    EffectsModule.forRoot([]),
    UserStoreModule,
    LoginStoreModule,
    StoreDevtoolsModule.instrument()
  ],
  exports: [StoreModule],
  providers: [UserService],
})
export class AppStoreModule { }