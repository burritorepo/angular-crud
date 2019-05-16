import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: []
})
export class SharedModule {
}
