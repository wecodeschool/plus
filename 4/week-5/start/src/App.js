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
            <CityWeather name="Paris" temp={24} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Lisbon" temp={21} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Sydney" temp={8} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Santiago" temp={16} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="New York" temp={32} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="South Pole" temp={-59} />
          </div>
          <div className="col-md-4 mb-3">
            <CityWeather name="Singapore" temp={50} />
          </div>
        </div>
      </div>
    );
  }
}
