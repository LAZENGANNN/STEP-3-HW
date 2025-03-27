import { Component } from '@angular/core';
import { OzonCardComponent } from './ozon-card/ozon-card.component';
import { PhotoComponent } from './photo/photo.component';
import { Pic3Component } from './pic3/pic3.component';
import { SteamdbComponent } from './steamdb/steamdb.component';

@Component({
  selector: 'app-init-page',
  imports: [OzonCardComponent, PhotoComponent, Pic3Component, SteamdbComponent],
  templateUrl: './init-page.component.html',
  styleUrl: './init-page.component.css'
})
export class InitPageComponent {

}
