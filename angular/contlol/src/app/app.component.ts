import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RandomtronService } from './services/random/randomtron.service';
import { LocalService } from './services/local/local.service';
import { Contact } from './Classes&Interfaces/contactClass';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'contlol'

  constructor(
    private localService: LocalService,
    private random: RandomtronService
  ) {}

  linksArr = [`https://cdn-icons-png.flaticon.com/512/219/219988.png`,`https://cdn-icons-png.freepik.com/512/219/219981.png`,`https://cdn-icons-png.freepik.com/512/219/219964.png`]

  ngOnInit() {
    if (this.localService.checkStorage('contacts')) {
      return;
    } else {
      let arr = [];
      for (let i: number = 0; i <= 15; i++) {
        arr.push(
          new Contact(
            this.random.getRandomSymbols(10),
            ( (this.random.getRandomInt(0,3) != 2)? `last been: ${this.random.getRandomInt(0, 12)}:${this.random.getRandomInt( 0,59 )}` : `online`),
            `${this.random.getRandomInt(10000000, 99999999)}`,
            `${this.random.getRandomSymbols(7)}@gmail.com`,
            this.linksArr[this.random.getRandomInt(0,2)],
            false,
            []
          )
        );
      }
      this.localService.saveData(`contacts`, JSON.stringify(arr));
    }
  }
}
