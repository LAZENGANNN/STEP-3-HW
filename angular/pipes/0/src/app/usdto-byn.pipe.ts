import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoBYN',
  standalone: false
})
export class USDtoBYNPipe implements PipeTransform {

  transform(USD: string, rate: number): unknown {
    return USD as unknown as number * rate;
  }

}
