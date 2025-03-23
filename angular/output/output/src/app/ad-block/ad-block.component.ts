import { Component } from '@angular/core';
import { EstateInterface } from '../estateInterface';
import { EstateClass } from './estateClass';

@Component({
  selector: 'app-ad-block',
  standalone: false,
  templateUrl: './ad-block.component.html',
  styleUrl: './ad-block.component.css',
})
export class AdBlockComponent {
  arr: EstateClass[] = [];
  unfiltedArr: EstateClass[] = [];

  forSearch: string = '';

  // sortTest: any = '';
  // filterTest: any = '';
  // strTest: any = '';

  avgSum: string = `нажмите кнопку`;

  adCount: string = `нажмите кнопку`;

  avgSumN: string = '';

  cheapest: EstateClass[] = [];

  expencive: EstateClass[] = [];

  cheapVisible: boolean = false;

  expenciveVisible: boolean = false;

  linksArr: string[] = [
    `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg`,
    `https://www.baufritz.com/01_Haeuser/Kundenh%C3%A4user/2019/Richter/Bilder/247/image-thumb__247__hero/-8585855483413193058.cde65288.jpg`,
  ];
  typesArr: string[] = [`house`, `apartment`, `room`];

  applyLightupSearchOutput(str: string) {
    this.forSearch = str;
  }

  lightupClass(el: EstateClass) {
    if (el.name.includes(this.forSearch) && this.forSearch != '') {
      return true;
    } else {
      return false;
    }
  }

  offFilters() {
    this.arr = this.unfiltedArr;
    this.forSearch = '';
  }

  applySort(name: any) {
    switch (name) {
      case 'price':
        this.arr.sort((a, b) => a.price - b.price);
        break;
      case 'square':
        this.arr.sort((a, b) => a.liveSquare - b.liveSquare);
        break;
      case 'rooms':
        this.arr.sort((a, b) => a.roomsCount - b.roomsCount);
        break;

      default:
        break;
    }
  }
  applyFilters(price: any) {
    this.arr = this.arr.filter((el) => el.price == price);
  }
  applySearch(str: any) {
    this.arr = this.arr.filter((el) => el.name.includes(str));
  }

  ngOnInit(): void {
    this.arr = [...this.createRandom()];
    this.unfiltedArr = this.arr;

    this.cheapest = [this.arr[0]];
    this.arr.map((el) => {
      if (el.price < this.cheapest[0].price) {
        this.cheapest[0] = el;
      }
    });

    this.expencive = [this.arr[0]];
    this.arr.map((el) => {
      if (el.price > this.expencive[0].price) {
        this.expencive[0] = el;
      }
    });
  }

  showCheap() {
    this.cheapVisible = true;
  }

  showExpencive() {
    this.expenciveVisible = true;
  }

  createRandom() {
    const returnArr = [];
    for (let i: number = 1; i <= this.getRandomInt(10, 20); i++) {
      returnArr.push(
        new EstateClass(
          this.getRandomSymbols(10),
          this.linksArr[this.getRandomInt(0, 1)],
          this.getRandomInt(10000, 999999),
          this.getRandomInt(1, 4),
          this.getRandomInt(50, 170),
          this.getRandomInt(0, 9),
          this.typesArr[this.getRandomInt(0, 2)]
        )
      );
    }
    return returnArr;
  }

  calcAvgSumN(event: Event): void {
    if (
      ((event.target as HTMLInputElement).value as any as number) >= 5 ||
      (event.target as HTMLInputElement).value === ''
    ) {
      this.avgSumN = `введите число меньше 5`;
      return;
    }

    let sum: number = 0;
    let counter: number = 0;
    this.arr.map((el) => {
      if (
        el.roomsCount ==
        ((event.target as HTMLInputElement).value as any as number)
      ) {
        sum += el.price;
        counter++;
      }
    });
    this.avgSumN = `${sum / counter}`;
  }

  calcAvgSum(): void {
    let sum: number = 0;
    this.arr.map((el) => {
      sum += el.price;
    });
    this.avgSum = `${Math.floor(sum / this.arr.length)}`;
  }

  countads(): void {
    this.adCount = `${this.arr.length}`;
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  getRandomSymbols(count: number) {
    const string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 1; i <= count; i++) {
      result += string.charAt(this.getRandomInt(0, string.length));
    }
    return result;
  }
}
