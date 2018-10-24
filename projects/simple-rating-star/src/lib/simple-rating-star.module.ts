import { NgModule } from '@angular/core';
import { SimpleRatingStarComponent } from './simple-rating-star.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [SimpleRatingStarComponent],
  exports: [SimpleRatingStarComponent]
})
export class SimpleRatingStarModule { }
