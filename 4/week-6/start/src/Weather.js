import React, { Component } from "react";
import "./Weather.css";

export default class Weather extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.setState({
      loaded: true,
      weather: {
        date: "Tuesday 18:00",
        city: "Lisbon",
        description: "Partly Cloudy",
        temperature: 21,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        precipitation: 0,
        humidity: 74,
        wind: 26
      }
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h1>{this.state.weather.city}</h1>
          <ul>
            <li>{this.state.weather.date}</li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 ">
              <div className="clearfix">
                <img
                  src={this.state.weather.iconUrl}
                  alt=""
                  className="float-left"
                />
                <div className="temperature float-left">
                  {this.state.weather.temperature}
                  <small>°C</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Precipitation: {this.state.weather.precipitation}%</li>
                <li>Humidity: {this.state.weather.humidity}%</li>
                <li>Wind: {this.state.weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
