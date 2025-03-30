import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomtronService {
  constructor() {}

  public getRandomInt(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  public getRandomSymbols(count: number) {
    const string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 1; i <= count; i++) {
      result += string.charAt(this.getRandomInt(0, string.length));
    }
    return result;
  }
}
