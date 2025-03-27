import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InputPageComponent } from './components/input-page/input-page.component';
import { OutputPageComponent } from './components/output-page/output-page.component';
import { InitPageComponent } from './components/init-page/init-page.component';

export const routes: Routes = [
 {path: '', component: HomePageComponent},
 {path: 'output', component: InputPageComponent},
 {path: 'input', component: OutputPageComponent},
 {path: 'init', component: InitPageComponent}
];
