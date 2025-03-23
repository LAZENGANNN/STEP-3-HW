import { Component } from '@angular/core';
import { Product, productsArr } from './product';

@Component({
  selector: 'app-tablee',
  standalone: false,
  templateUrl: './tablee.component.html',
  styleUrl: './tablee.component.css',
})
export class TableeComponent {
  arr: Product[] = productsArr;
}
