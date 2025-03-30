import { Component, Input } from '@angular/core';
import { Contact } from '../../Classes&Interfaces/contactClass';

@Component({
  selector: 'app-contact-line',
  imports: [],
  templateUrl: './contact-line.component.html',
  styleUrl: './contact-line.component.css',
})
export class ContactLineComponent {
  @Input() contact?: Contact;
}
