import { Component, Input } from '@angular/core';
import { ProductInterface } from '../productInterface';

@Component({
  selector: 'app-line',
  standalone: true,
  imports:[],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @Input() productArrElement?: ProductInterface;
}
