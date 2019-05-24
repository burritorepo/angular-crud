import { Directive, ElementRef, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[required]'
})
export class ValidationDirective {
  constructor(private ngControl: NgControl, private el: ElementRef) {
  }

  @HostBinding('class.valid') get valid() { return this.ngControl.valid; }
}