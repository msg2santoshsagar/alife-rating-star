import { Component } from '@angular/core';
import RatingOption from 'projects/simple-rating-star/src/lib/rating-options';

@Component({
  selector: 'alife-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: RatingOption = {
    readOnly: false,
    resetAllowed:false
  };

  modelRating:number[] = [1,2,3,4,5,0,2];

  OnRatingChanged(r) {
    console.log("Rating changed :: ", r);
  }

}
