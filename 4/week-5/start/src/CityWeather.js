import React, { Component } from "react";
import "./CityWeather.css";

export default class CityWeather extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body bg-light">
          <div className="badge badge-danger">HOT</div>
          <h5 className="card-title">
            <strong>{this.props.name}</strong>
          </h5>
          <p className="card-text city-temperature">
            {this.props.temp}
            <small>
              °C | <span className="fahrenheit">°F</span>
            </small>
          </p>
          <a href="#" className="btn btn-primary shadow-sm">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
