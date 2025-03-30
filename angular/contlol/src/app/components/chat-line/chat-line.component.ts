import { Component, Input } from '@angular/core';
import { Contact } from '../../Classes&Interfaces/contactClass';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-line',
  imports: [RouterLink],
  templateUrl: './chat-line.component.html',
  styleUrl: './chat-line.component.css',
})
export class ChatLineComponent {
  @Input() contact?: Contact;
}
