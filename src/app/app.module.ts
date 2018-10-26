import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlifeRatingStarModule } from 'projects/alife-rating-star/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlifeRatingStarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
