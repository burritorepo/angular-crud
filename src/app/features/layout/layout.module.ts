import { NgModule } from '@angular/core';
import { LAYOUT_COMPONENTS } from './components';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [LayoutRoutingModule],
  exports: [],
  providers: [],
})
export class LayoutModule { }