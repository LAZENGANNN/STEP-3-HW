import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  imagesArr: string[] = [
    `https://media.4-paws.org/9/c/9/7/9c97c38666efa11b79d94619cc1db56e8c43d430/Molly_006-2829x1886-2726x1886-1920x1328.jpg`,
    `https://images.squarespace-cdn.com/content/v1/5f7d9d8c137825236f5fa34e/6b181ab9-e049-47cf-868d-f9ed306e6876/michael-sum-LEpfefQf4rU-unsplash.jpg`,
    `https://media.tenor.com/kglDzTqoEUAAAAAM/maxwell-cat.gif`,
    `https://i.pinimg.com/736x/7d/fd/c0/7dfdc0268e8a87ca79aca83050d03b93.jpg`,
    `https://i.pinimg.com/originals/1c/5d/45/1c5d45a9c08ce419addfd557757fc58c.jpg`,
    `https://www.catster.com/wp-content/uploads/2023/11/Beluga-Cat-e1714190563227.webp`
  ];
  /////////////
  randImage: string = this.imagesArr[this.randomint(this.imagesArr.length-1, 0)];
  name: string = this.getRandomSymbols(10);
  author: string = this.getRandomSymbols(10);
  likes: number = this.randomint(1000, 0);
  watches: number = this.randomint(1000, 0);
  /////////////
  randomint(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomSymbols(n: number): string {
    let result = '';
    for (let i = 1; i <= n; i++) {
      result +=
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '.charAt(
          this.randomint(
            0,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '
              .length
          )
        );
    }
    return result;
  }
}
