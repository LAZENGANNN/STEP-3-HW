import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  standalone: false,
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  BYN: string = "0"
  USD: string = "0"

  rate: number = 3

  BYNchange(event: Event): void {
    this.BYN = (event.target as HTMLInputElement).value
  }

  USDchange(event: Event) {
    this.USD = (event.target as HTMLInputElement).value
  }

  rateChange(event: Event) {
    this.rate = (event.target as HTMLInputElement).value as unknown as number
  }
}
