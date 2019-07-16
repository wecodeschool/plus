import React, { Component } from "react";

export default class formattedDate extends Component {
  componentWillMount() {
    let date = new Date(this.props.value * 1000);

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
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) minutes = `0${minutes}`;

    this.setState({
      date: `${day} ${hours}:${minutes}`
    });
  }
  render() {
    return <div>{this.state.date}</div>;
  }
}
