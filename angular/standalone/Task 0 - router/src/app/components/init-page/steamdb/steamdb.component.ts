import { Component } from '@angular/core';

@Component({
  selector: 'app-steamdb',
  standalone: true,
  templateUrl: './steamdb.component.html',
  styleUrl: './steamdb.component.css'
})
export class SteamdbComponent {
  arr: string[] = [
    "Counter-Strike 2",
    "Dota 2",
    "PUBG: BATTLEGROUNDS",
    "Apex Legends",
    "Mister Furry",
    "Grand Theft Auto V",
    "Baldur's Gate 3",
    "Cyberpunk 2077",
    "Sex with Hitler",
    "Red Dead Redemption 2"
  ];

  gameName:string = this.arr[this.randomint(this.arr.length-1, 0)];
  players: number = this.randomint(999999,111111);
  peak24: number = this.randomint(999999,111111);

  randomint(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
