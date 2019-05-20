import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../ui/ui.module';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  UIModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: []
})
export class SharedModule {
}
