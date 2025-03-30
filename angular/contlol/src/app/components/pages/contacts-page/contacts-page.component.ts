import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactLineComponent } from '../../contact-line/contact-line.component';
import { LocalService } from '../../../services/local/local.service';
import { Contact } from '../../../Classes&Interfaces/contactClass';
import { RandomtronService } from '../../../services/random/randomtron.service';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactLineComponent, CommonModule, FormsModule],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
})
export class ContactsPageComponent {
  constructor(
    private localService: LocalService,
    private random: RandomtronService
  ) {}
  arr = [];

  ngOnInit() {
    if (!this.localService.checkStorage('currentUser')) {
      window.location = '' as string & Location;
      alert('сначала зарегестрируйтесть');
      return;
    }
    this.arr = this.localService.getData('contacts');
  }

  addingContact = {
    nickname: '',
    number: '',
    email: '',
  };

  onPhoneChange(e: Event) {
    this.addingContact.number = (e.target as HTMLInputElement).value;
  }
  onNicknameChange(e: Event) {
    this.addingContact.nickname = (e.target as HTMLInputElement).value;
  }
  onEmailChange(e: Event) {
    this.addingContact.email = (e.target as HTMLInputElement).value;
  }

  addContact() {
    let arr = this.localService.getData('contacts');
    console.log(arr);
    arr.push(
      new Contact(
        this.addingContact.nickname,
        this.random.getRandomInt(0, 3) != 2
          ? `last been: ${this.random.getRandomInt(
              0,
              12
            )}:${this.random.getRandomInt(0, 59)}`
          : `online`,
        this.addingContact.number,
        this.addingContact.email,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42bpPRH9j_zKWtFabpIyktLOf2k_9zWj1tA&s',
        false,
        []
      )
    );
    this.localService.saveData('contacts', JSON.stringify(arr));
  }
}
