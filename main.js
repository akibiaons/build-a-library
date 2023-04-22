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

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }

  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  } // Something may be off with my checkout method and property as they print undefined

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

  class Book extends Media {
    constructor(author, title, pages) {
     super(title);
     this.author = author;
     this._pages = pages;

    }

    get author() {
      return this._author;
    }

    get pages() {
      return this._pages;
    }
  }

  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this.director = director;
      this._runTime = runTime;
    }

    get director() {
      return this._director; 
    }

    get runTime() {
      return this._runTime;
    }
  }

console.log(Media.isCheckedOut);
console.log(Media._isCheckedOut);