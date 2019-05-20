import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UI_COMPONENTS } from '.';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

@NgModule({
  declarations: [...UI_COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [
    CommonModule
  ],
  exports: [...UI_COMPONENTS, ...DIRECTIVES, ...PIPES],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UIModule { }