import { Injectable } from '@angular/core';
import { EstateClass } from '../ad-block/estateClass';

@Injectable({
  providedIn: 'root',
})
export class EstateDataService {
  constructor() {
    this.estateData = [...this.createRandom()];
  }

  estateData: EstateClass[] = [];

  ret: EstateClass[] = [];

  applySort(name: string) {
    switch (name) {
      case 'price':
        this.estateData.sort((a, b) => a.price - b.price);
        break;
      case 'square':
        this.estateData.sort((a, b) => a.liveSquare - b.liveSquare);
        break;
      case 'rooms':
        this.estateData.sort((a, b) => a.roomsCount - b.roomsCount);
        break;

      default:
        break;
    }
    return this.estateData;
  }

  applyFilters(price: any) {
    this.ret = this.estateData.filter((el) => el.price == price);
    return this.ret;
  }

  applySearch(str: any) {
    this.ret = this.estateData.filter((el) => el.name.includes(str));
    return this.ret;
  }

  deleteBlock(str: any) {
    console.log(str);
    this.estateData = this.estateData.filter((el) => !(el.name === str));
    return this.ret;
  }

  linksArr: string[] = [
    `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg`,
    `https://www.baufritz.com/01_Haeuser/Kundenh%C3%A4user/2019/Richter/Bilder/247/image-thumb__247__hero/-8585855483413193058.cde65288.jpg`,
  ];
  typesArr: string[] = [`house`, `apartment`, `room`];

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
