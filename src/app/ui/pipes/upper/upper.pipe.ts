import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'upper'})
export class UpperPipe implements PipeTransform {
  transform(value: any, two: any): any {
    return 'ola'
  }
}