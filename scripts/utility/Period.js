export default class Period {

  constructor() {
    this._year = null;
    this._month = null;
    this._day = null
  }

  set year(value) {
    this._year = value;
  }

  set month(value) {
    this._month = value;
  }

  set day(value) {
    this._day = value;
  }

  firstDay() {
    if (this._year === null) {
      return null;
    }

    if (this._month === null) {
      return new Date(this._year, 0, 1, 0, 0);
    }

    if (this._day === null) {
      return new Date(this._year, this._month - 1, 1, 0, 0);
    }

    return new Date(this._year, this._month - 1, this._day, 0, 0);

  }

  lastDay() {
    if (this._year === null) {
      return null;
    }

    if (this._month === null) {
      return new Date(this._year + 1, 0, 0, 0, 0);
    }

    if (this._day === null) {
      return new Date(this._year, this._month, 0, 0, 0);
    }

    return new Date(this._year, this._month - 1, this._day + 1, 0, 0);
  }
}
