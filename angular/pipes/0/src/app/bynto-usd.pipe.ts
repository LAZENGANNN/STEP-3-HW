import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bYNtoUSD',
  standalone: false
})
export class BYNtoUSDPipe implements PipeTransform {

  transform(BYN: string, rate: number): unknown {
    return BYN as unknown as number / rate;
  }

}
