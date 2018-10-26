/**
 * To maintain options of rating
 */
class RatingOption {
    /**
     * Max allowed rating
     * @default 5
     */
    maxRating?: number = 5;

    /**
     * To decide if the rating is in read only mode
     * @default false
     */
    readOnly?: boolean = false;

    /**
     * To check if user can reset the rating to 0 or not
     * 
     * @default true
     */
    resetAllowed?: boolean = true;
}

export default RatingOption;