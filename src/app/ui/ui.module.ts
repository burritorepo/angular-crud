import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UI_COMPONENTS } from '.'

@NgModule({
  declarations: [...UI_COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...UI_COMPONENTS],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UIModule { }