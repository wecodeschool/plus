import React, { Component } from "react";

export default class WeatherIcon extends Component {
  iconUrl = () => {
    return `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
  };

  render() {
    return <img src={this.iconUrl()} />;
  }
}
