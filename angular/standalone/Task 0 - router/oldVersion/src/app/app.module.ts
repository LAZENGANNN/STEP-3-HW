import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdComponent } from './ad/ad.component';
import { AdBlockComponent } from './ad-block/ad-block.component';
import { FormsModule } from '@angular/forms';
import { FiltersBlockComponent } from './filters-block/filters-block.component';

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    AdBlockComponent,
    FiltersBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
