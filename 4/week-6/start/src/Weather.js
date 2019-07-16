import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>Lisbon</h1>
        <ul>
          <li>Tuesday 18:00</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="temperature">
          21<small>°C</small>
        </div>
        <ul>
          <li>Precipitation: 0%</li>
          <li>Humidity: 74%</li>
          <li>Wind: 26 km/h</li>
        </ul>
      </div>
    );
  }
}
