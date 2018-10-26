import { NgModule } from '@angular/core';
import { AlifeRatingStarComponent } from './alife-rating-star.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AlifeRatingStarComponent],
  exports: [AlifeRatingStarComponent]
})
export class AlifeRatingStarModule { }
