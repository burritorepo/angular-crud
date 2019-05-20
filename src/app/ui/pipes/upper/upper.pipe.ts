import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'upper'})
export class UpperPipe implements PipeTransform {
  transform(value: any, two: any): any {
    console.log('value', value)
    console.log('two', two)

    return 'ola'
  }
}