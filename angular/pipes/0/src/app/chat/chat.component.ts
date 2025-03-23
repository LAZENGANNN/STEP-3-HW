import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  messages: string[] = [];

  typingNow: string = '';

  changeTypingNow(event: Event): void {
    this.typingNow = (event.target as HTMLInputElement).value;
  }

  addMessage(): void {
    this.messages.push(this.typingNow);
    this.answer();
  }

  answer(): void {
    this.messages.push(this.getRandomSymbols(this.getRandomInt(10, 40)));
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  getRandomSymbols(count: number) {
    let result = '';
    const stringL: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i: number = 1; i <= count; i++) {
      result += stringL.charAt(this.getRandomInt(0, stringL.length));
    }

    return result;
  }
}
