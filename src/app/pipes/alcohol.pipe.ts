import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let symbol = ',';
    if (args) {
      if (typeof args === 'string') {
        if (args === '.') {
          symbol = '.';
        } else if (args === ',') {
          symbol = ',';
        } else {
          console.error('Wrong parameter in pipe Alcohol: ' + args);
        }
      }
    }
    if (typeof value === 'number') {
      const integ = Math.floor(value);
      const decimal = value - integ;
      let dec = Math.round(decimal * 100);
      if (dec % 10 === 0) {
        dec = dec / 10;
      }
      return integ + symbol + dec + 'º';
    } else {
      console.error('Wrong type in Acohol pipe (only number is a valid type): ' + value);
      return value;
    }

  }

}
