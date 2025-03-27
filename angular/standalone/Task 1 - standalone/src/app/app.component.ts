import { Component } from '@angular/core';

import { AdBlockComponent } from './ad-block/ad-block.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[AdBlockComponent],
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';
}
