export default class DateUtility {
  static days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  constructor(date) {
    this.date = date;
  }

  day() {
    return DateUtility.days[this.date.getDay()];
  }

  shortDay() {
    return this.day().substring(0, 3);
  }

  minutes() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return minutes;
  }

  hours() {
    return this.date.getHours();
  }

  friendlyDate() {
    return `${this.day()} ${this.hours()}:${this.minutes()}`;
  }
}
