import React, { Component } from "react";

export default class CityTemperature extends Component {
  calculateTemperature() {
    if (this.props.unit === "metrics") {
      return this.props.temperature;
    } else {
      return Math.round(this.props.temperature * (9 / 5) + 32);
    }
  }

  temperatureUnit() {
    if (this.props.unit === "metrics") {
      return "C";
    } else {
      return "F";
    }
  }

  render() {
    return (
      <div>
        {this.calculateTemperature()}°{this.temperatureUnit()}
      </div>
    );
  }
}
