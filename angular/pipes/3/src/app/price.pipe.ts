import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: false,
})
export class PricePipe implements PipeTransform {
  transform(price: number, discount: number): string {
    if (discount <= 0) {
      return `<h2>${price}</h2>`;
    }
    return `<h2>${price * (discount / 100)}  -${discount}%</h2>`;
  }
}
