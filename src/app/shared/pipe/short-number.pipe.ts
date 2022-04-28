
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(num: number, args?: any): any {
    if (isNaN(num)) {return null;} // will only work value is a number
    if (num === null) {return null;}
    if (num === 0) {return null;}
    let abs = Math.abs(num);
    const rounder = Math.pow(10, 1);
    const isNegative = num < 0; // will also work for Negetive numbers
    let key = '';

    const powers = [
      {key: 'Q', value: Math.pow(10, 15)},
      {key: 'T', value: Math.pow(10, 12)},
      {key: 'B', value: Math.pow(10, 9)},
      {key: 'M', value: Math.pow(10, 6)},
      {key: 'K', value: 1000}
    ];

    for (const power of powers) {
      let reduced = abs / power.value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = power.key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }
}
