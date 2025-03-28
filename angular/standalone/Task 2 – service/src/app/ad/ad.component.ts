import { Component, Input } from '@angular/core';
import { EstateInterface } from '../estateInterface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.css'
})
export class AdComponent {
  @Input() estateUnit?: EstateInterface;
}
