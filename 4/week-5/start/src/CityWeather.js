import React, { Component } from "react";
import "./CityWeather.css";

export default class CityWeather extends Component {
  label() {
    if (this.props.temp < 0)
      return <div className="badge badge-primary">FREEZING</div>;
    if (this.props.temp > 25)
      return <div className="badge badge-danger">HOT</div>;
    if (this.props.temp < 10)
      return <div className="badge badge-info">COLD</div>;
    return <div className="badge badge-warning">WARM</div>;
  }

  render() {
    return (
      <div className="card">
        <div className="card-body bg-light">
          {this.label()}
          <h5 className="card-title">
            <strong>{this.props.name}</strong>
          </h5>
          <p className="card-text city-temperature">
            {this.props.temp}
            <small>
              °C | <span className="fahrenheit">°F</span>
            </small>
          </p>
          <a
            href={`https://www.google.com/search?q=weather+${this.props.name}`}
            target="_blank"
            className="btn btn-primary btn-sm shadow-sm"
          >
            View forecast
          </a>
        </div>
      </div>
    );
  }
}
