import { Component } from '@angular/core';
import RatingOption from 'projects/alife-rating-star/src/lib/rating.options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alife-rating-star-app';

  options: RatingOption = {
    readOnly: false,
    resetAllowed: false
  };

  modelRating: number[] = [1, 2, 3, 4, 5, 0, 2];

  OnRatingChanged(r) {
    console.log("Rating changed :: ", r);
  }

}
