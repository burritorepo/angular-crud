import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { API_PROVIDERS } from './api';
import { INTERCEPTORS_PROVIDERS } from './api/core'

import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

// redux
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [...API_PROVIDERS, ...INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }