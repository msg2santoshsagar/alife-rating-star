# Alife Rating Star

Angular simple yet powerful library to show rating star which uses `Google Material Icons`

## Install alife-rating-star from NPM :

Run `npm install alife-rating-star --save`

## Add Dependecy to your project

- Add Google Material Icons to index .html

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
-  Import `AlifeRatingStarModule` to your project and include module in imports section

```javascript
import { AlifeRatingStarModule } from 'alife-rating-star';

@NgModule({
  declarations: [
  ],
  imports: [
    AlifeRatingStarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Syntax
```html
<alife-rating-star [options]="options" (onRatingChanged)="OnRatingChanged($event)" [rating]="3" ></alife-rating-star>
```

## Options

options Definition : 

```javascript
options = {
       maxRating?: number = 5;
       readOnly?: boolean = false;
       resetAllowed?: boolean = true;
 }
```
 - maxRating      : The number of star
 - readOnly       : To decide if user can change the value or not
 - resetAllowed   : To allow user to reset the rating

## Events

 - onRatingChanged : Will get called when user will change the rating. It will contain previous rating and new rating.

## Passing the initial rating

    There is may ways to set rating. You can set as given below :
    
    [rating]="3"            : Constant value
    [rating]="ratingData"   : To set the value from component
    rating="3"              : Constant
    [(rating)]="ratingData" : Two way binding

## Examples

- Displaying rating using loop with two way binding

```html
<alife-rating-star [options]="options" (onRatingChanged)="OnRatingChanged($event)" [(rating)]="modelRating[index]"
    *ngFor="let r of modelRating;let index = index"></alife-rating-star>
```
-  Displaying rating using value

```html
<alife-rating-star [options]="options" (onRatingChanged)="OnRatingChanged($event)" [rating]="modelRating" ></alife-rating-star>
```

## Author

Santosh Sagar

## License

This module is released under the permissive [MIT license](https://github.com/msg2santoshsagar/alife-rating-star/blob/master/LICENSE)