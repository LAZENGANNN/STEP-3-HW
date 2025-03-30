import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../../../services/local/local.service';
import { ChatLineComponent } from '../../chat-line/chat-line.component';
import { Contact } from '../../../Classes&Interfaces/contactClass';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-chats-page',
  imports: [
    ChatLineComponent,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './chats-page.component.html',
  styleUrl: './chats-page.component.css',
})
export class ChatsPageComponent {
  constructor(private localService: LocalService) {}

  arr: Contact[] = [];
  renderArr: Contact[] = [];

  findableNick: string = '';

  ngOnInit() {
    if (!this.localService.checkStorage('currentUser')) {
      window.location = '' as string & Location;
      alert('сначала зарегестрируйтесть');
      return;
    }
    this.arr = this.localService.getData('contacts');
    this.renderArr = this.arr.filter((el) => el.isChat);
  }

  startChat() {
    this.arr.map((el) => {
      if (el.nickname === this.findableNick) {
        el.isChat = true;
        alert('new chat started');
        return el;
      } else {
        return el;
      }
    });
    this.localService.saveData('contacts', JSON.stringify(this.arr));
    this.renderArr = this.arr.filter((el) => el.isChat);
  }

  onNicknameChange(e: Event) {
    this.findableNick = (e.target as HTMLInputElement).value;
  }
}
