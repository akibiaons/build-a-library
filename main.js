// Library code will be here for this project. This library carries books, CD's, and movies.
/*
- I will create a parent class that includes shared proeprties such as titles and authors.
*/

// Below I will create the parent Media class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get avalibility() {
    return this._checkoutStatus;
  }

  get ratings() {
    return this._ratings;
  }

  set avalibility(isCheckedOut) {
    this._avalibility = isCheckedOut;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut = !this.avalibility;
  }

  getAverageRating() {
    let sum = this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    return Math.floor(sum / this._ratings.length);
  }
  // Above I created a method that returns the average values of the ratings array.
  addRating(critic) {
    this._ratings.push(critic);
  }
  // added a method to push ratings into the array...
}

  class book {
    
  }