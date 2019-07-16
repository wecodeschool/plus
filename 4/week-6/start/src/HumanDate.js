import React, { Component } from "react";

export default class HumanDate extends Component {
  humanizeDate = () => {
    // Had to multiply the timestamp by 1000 to make it compatible
    // Add timezone difference to the date
    // Substract 1 hour (3600 seconds) because of summer time
    // Talk to Maria if problem
    let date = new Date(
      this.props.timestamp * 1000 + (this.props.timezone - 3600) * 1000
    );
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}:${minutes}`;
  };

  render() {
    return <div>{this.humanizeDate()}</div>;
  }
}
