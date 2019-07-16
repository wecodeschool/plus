import React, { Component } from "react";
import "./Weather.css";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
        <ul>
          <li>Tuesday 18:00</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-sm-6 ">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
                className="float-left"
              />
              <div className="temperature float-left">
                21<small>°C</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 74%</li>
              <li>Wind: 26 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
