import React, { Component } from "react";
import CityWeather from "./CityWeather";
import "./App.css";

export default class App extends Component {
  render() {
    let heading = "Weather App";

    return (
      <div>
        <h1>{heading}</h1>

        <div className="row">
          <div className="col-md-4">
            <CityWeather />
          </div>
          <div className="col-md-4">
            <CityWeather />
          </div>
          <div className="col-md-4">
            <CityWeather />
          </div>
        </div>
      </div>
    );
  }
}
