import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksConverterPipe } from './links-converter.pipe';
import { RatingPipe } from './rating.pipe';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LinksConverterPipe,
    RatingPipe,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
