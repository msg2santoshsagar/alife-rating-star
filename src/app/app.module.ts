import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleRatingStarModule } from 'projects/simple-rating-star/src/public_api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleRatingStarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
