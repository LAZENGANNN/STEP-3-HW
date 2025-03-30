import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../../../services/local/local.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private localService: LocalService) {}

  currentUser = {
    phone: '',
    nickname: '',
    email: '',
  };

  ngOnInit() {
    if (this.localService.checkStorage('currentUser')) {
      this.currentUser = this.localService.getData('currentUser')
    }
  }

  onPhoneChange(e: Event) {
    this.currentUser.phone = (e.target as HTMLInputElement).value;
  }
  onNicknameChange(e: Event) {
    this.currentUser.nickname = (e.target as HTMLInputElement).value;
  }
  onEmailChange(e: Event) {
    this.currentUser.email = (e.target as HTMLInputElement).value;
  }

  authorize() {
    this.localService.saveData('currentUser', JSON.stringify(this.currentUser));
  }
  logOut(){
    this.localService.removeData('currentUser')
  }
  clear(){
    this.localService.clearData()
  }
}
