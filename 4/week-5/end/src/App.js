import React, { Component } from "react";
import CityWeather from "./CityWeather";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <div className="row">
          <div className="col-md-4 mb-3">
            <CityWeather name="Paris" />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Lisbon" />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Sydney" />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Santiago" />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="New York" />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Singapore" />
          </div>
        </div>
      </div>
    );
  }
}
