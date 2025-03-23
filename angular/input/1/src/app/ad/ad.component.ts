import { Component, Input } from '@angular/core';
import { EstateInterface } from '../estateInterface';

@Component({
  selector: 'app-ad',
  standalone: false,
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.css'
})
export class AdComponent {
  @Input() estateUnit?: EstateInterface;
}
