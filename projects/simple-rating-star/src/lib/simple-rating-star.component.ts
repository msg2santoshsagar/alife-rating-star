import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import RatingOption from './rating-options';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'alife-simple-rating-star',
  templateUrl: './simple-rating-star.component.html',
  styleUrls: ['./simple-rating-star.component.css'],
  inputs: ['options', 'rating'],
  outputs: ['onRatingChanged', 'ratingChange']
})
export class SimpleRatingStarComponent implements OnInit, OnChanges, DoCheck {

  options: RatingOption; // To take the input
  rating: number; // Rating Input

  oldOption: RatingOption = {
    maxRating: null,
    readOnly: null,
    resetAllowed: null
  };

  onRatingChanged = new EventEmitter();
  ratingChange: EventEmitter<number> = new EventEmitter<number>();

  ratingOption: RatingOption = {}; // will be used for operations

  ratings: any[] = [];

  constructor() { }

  ngOnInit() {
    this.drawStars();
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("change detected :: ",changes);
    if (changes.rating != null) {
      this.drawStars();
    }
    if (changes.options != null) {
      //console.log("Current option :: ",changes.options.currentValue);
      this.drawStars();
    }
  }

  /**
   * It will check if any update in the options value and update the view accordingly
   */
  ngDoCheck() {
    if (this.options == null) {
      return;
    }
    if (this.oldOption.maxRating != this.options.maxRating) {
      this.drawStars();
    }
    if (this.oldOption.readOnly != this.options.readOnly) {
      this.drawStars();
    }
  }

  /**
   * To draw the stars
   */
  drawStars() {

    this.prepareOption(); // prepare the option

    if (this.options != null) {
      this.oldOption.maxRating = this.options.maxRating;
      this.oldOption.readOnly = this.options.readOnly;
      this.oldOption.resetAllowed = this.options.resetAllowed;
    }

    let tmpRatings = [];

    for (let i = 1; i <= this.ratingOption.maxRating; i++) {
      let rating = {
        index: i,
        status: 'star-off'
      }
      tmpRatings.push(rating);
    }
    this.ratings = tmpRatings;
    this.validateStars(this.rating);
  }



  /**
   * Prepare the options.
   * It will override the default value if value is provided
   */
  prepareOption() {
    let ratingOption = new RatingOption();

    if (this.rating == undefined) {
      this.rating = 0;
    }

    if (this.options == undefined) {
      this.ratingOption = ratingOption;
    } else {

      this.ratingOption.maxRating = this.options.maxRating;
      this.ratingOption.readOnly = this.options.readOnly;
      this.ratingOption.resetAllowed = this.options.resetAllowed;

      if (this.ratingOption.maxRating == null) {
        this.ratingOption.maxRating = ratingOption.maxRating;
      }
      if (this.ratingOption.readOnly == null) {
        this.ratingOption.readOnly = ratingOption.readOnly;
      }
      if (this.ratingOption.resetAllowed == null) {
        this.ratingOption.resetAllowed = ratingOption.resetAllowed;
      }
    }
  }


  /**
   * To validate the starts, It will mark the start if it is on or off based on rating
   * @param rating 
   */
  validateStars(rating) {
    if (this.ratings.length === 0) {
      return;
    }
    for (let index = 0; index < this.ratings.length; index++) {
      let item = this.ratings[index];
      if (index <= (rating - 1)) {
        item.status = 'star-on';
      } else {
        item.status = 'star-off';
      }
    }
  }

  /**
   * To set temporary rating
   * @param rating
   */
  setMouseOverRating(rating) {
    if (this.ratingOption.readOnly) {
      return;
    }
    this.validateStars(rating);
    return;
  };

  /**
   * It will change the rating and emit onRatingChanged event also
   * @param rating
   */
  setRating(rating) {
    if (this.ratingOption.readOnly) {
      return;
    }
    let old = this.rating;
    this.rating = rating;
    this.ratingChange.emit(rating);
    this.validateStars(rating);
    this.onRatingChanged.next({ oldRating: old, newRating: rating });
    return;
  };


}
