import { Component, Input } from '@angular/core';
import { arr, Product } from './product';

@Component({
  selector: 'app-tablee',
  standalone: false,
  templateUrl: './tablee.component.html',
  styleUrl: './tablee.component.css',
})
export class TableeComponent {

  @Input() count?: string|number

  arr: Product[] = [];

  linksArr = [
    `https://www.foodiesfeed.com/wp-content/uploads/2024/01/best-burger-in-town.jpg`,
    `https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg`,
  ];

  ngOnInit() {
    for (let i: number = 1; i <= ((this.count) as any as number); i++) {
      const killnum = this.getRandomInt(0, 5);

      switch (killnum) {
        case 0:
          this.arr.push(
            new Product(
              null,
              this.getRandomSymbols(10),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000)
            )
          );
          break;
        case 1:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              null,
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000)
            )
          );

          break;
        case 2:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              this.getRandomSymbols(10),
              null,
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000)
            )
          );
          break;
        case 3:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              this.getRandomSymbols(10),
              this.getRandomInt(0, 1000),
              null,
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000)
            )
          );
          break;
        case 4:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              this.getRandomSymbols(10),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              null,
              this.getRandomInt(0, 1000)
            )
          );
          break;
        case 5:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              this.getRandomSymbols(10),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              null
            )
          );
          break;

        default:
          this.arr.push(
            new Product(
              this.linksArr[this.getRandomInt(0, 1)],
              this.getRandomSymbols(10),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000),
              this.getRandomInt(0, 1000)
            )
          );
          break;
      }
    }
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
