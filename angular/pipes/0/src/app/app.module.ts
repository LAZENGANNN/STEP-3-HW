import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConverterComponent } from './converter/converter.component';
import { BYNtoUSDPipe } from './bynto-usd.pipe';
import { USDtoBYNPipe } from './usdto-byn.pipe';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    BYNtoUSDPipe,
    USDtoBYNPipe,
    CalculatorComponent,
    ChatComponent
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
