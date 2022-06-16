import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TypeDataComponent } from './type-data/type-data.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrayComponent } from './array/array.component';
import { FunctionsComponent } from './functions/functions.component';
import { DOMComponent } from './dom/dom.component';
import { SourceComponent } from './source/source.component';
import { OOPComponent } from './oop/oop.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ElementComponent } from './element/element.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    WeatherComponent,
    CurrencyComponent,
    MainContentComponent,
    TypeDataComponent,
    ArrayComponent,
    FunctionsComponent,
    DOMComponent,
    SourceComponent,
    OOPComponent,
    ButtonComponent,
    InputComponent,
    ElementComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
