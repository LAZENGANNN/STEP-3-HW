import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { ChatsPageComponent } from './components/pages/chats-page/chats-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'chats', component: ChatsPageComponent },
  { path: 'chat/:id', component: ChatPageComponent }
];
