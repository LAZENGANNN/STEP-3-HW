import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableeComponent } from './tablee/tablee.component';

@Component({
  selector: 'app-output-page',
  imports: [CommonModule, TableeComponent],
  templateUrl: './output-page.component.html',
  styleUrl: './output-page.component.css'
})
export class OutputPageComponent {

}
