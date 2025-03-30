import { Component, NgModule } from '@angular/core';
import { RandomtronService } from '../../../services/random/randomtron.service';
import { LocalService } from '../../../services/local/local.service';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../Classes&Interfaces/contactClass';

@Component({
  selector: 'app-chat-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent {
  contactName: string | null = '';
  messages: string[] = [];
  chatWith: any;

  constructor(
    private localService: LocalService,
    private random: RandomtronService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contactName = this.route.snapshot.paramMap.get('id');
    console.log(this.contactName);

    this.chatWith = (this.localService.getData('contacts') as Contact[]).find(
      (el) => el.nickname == this.contactName
    );

    this.messages = [...(this.chatWith as Contact).chat];
  }

  typingNow: string = '';

  changeTypingNow(event: Event): void {
    this.typingNow = (event.target as HTMLInputElement).value;
  }

  addMessage(): void {
    this.messages.push(this.typingNow);

    this.answer();

    this.localService.saveData(
      'contacts',
      JSON.stringify(
        (this.localService.getData('contacts') as Contact[]).map((el) => {
          if (el.nickname === this.contactName) {
            el.chat = this.messages;
            return el;
          } else {
            return el;
          }
        })
      )
    );
  }

  answer(): void {
    this.messages.push(
      this.random.getRandomSymbols(this.random.getRandomInt(10, 40))
    );
  }
}
