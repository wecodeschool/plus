import React, { Component } from "react";
import CityWeather from "./CityWeather";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Weather App </h1>
        <div className="row">
          <div className="col-md-4 mb-3">
            <CityWeather name="Amsterdam" />
          </div>
        </div>
      </div>
    );
  }
}
