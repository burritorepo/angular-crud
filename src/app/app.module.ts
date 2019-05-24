import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { API_PROVIDERS } from './api';
import { INTERCEPTORS_PROVIDERS } from './api/core'

import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [...API_PROVIDERS, ...INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }