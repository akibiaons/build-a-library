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

  get rating() {
    return this._ratings;
  }
}