export default class DateUtil {
  constructor(date) {
    this.date = date;
  }

  day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[this.date.getDay()];
  }

  minutes() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    return minutes;
  }

  hours() {
    return this.date.getHours();
  }

  format() {
    return `${this.day()} ${this.hours()}:${this.minutes()}`;
  }

}
