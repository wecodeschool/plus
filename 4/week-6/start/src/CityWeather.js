import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./CityWeather.css";

export default class CityWeather extends Component {
  state = {
    temperature: {
      loaded: false
    }
  };

  label = () => {
    if (this.state.temperature.value < 0)
      return <div className="badge badge-primary"> FREEZING </div>;
    if (this.state.temperature.value > 25)
      return <div className="badge badge-danger"> HOT </div>;
    if (this.state.temperature.value < 10)
      return <div className="badge badge-info"> COLD </div>;
    return <div className="badge badge-warning"> WARM </div>;
  };

  showTemperature = response => {
    this.setState({
      temperature: {
        metrics: Math.round(response.data.main.temp),
        imperial: (this.state.temperature.value * 9) / 5 + 32,
        unit: "metrics",
        loaded: true
      }
    });
  };

  loadTemperature = () => {
    if (this.state.temperature.loaded) {
      return this.state.temperature.value;
    } else {
      let apiKey = "fe5b1ec1d3199b1c1bb7ae3cbda78fc9";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
        this.props.name
      }&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(this.showTemperature);

      return <Loader type="ThreeDots" color="#2d7df6" height="50" width="50" />;
    }
  };

  convertTemp = () => {
    if (this.state.temperature.unit === "metrics") {
      this.setState({
        temperature: {
          loaded: true,
          value: (this.state.temperature.value * 9) / 5 + 32,
          unit: "imperial"
        }
      });
    }
  };

  conversion = () => {
    if (this.state.temperature.unit === "metrics") {
      return (
        <small>
          °C |
          <span className="fahrenheit" onClick={this.convertTemp}>
            °F
          </span>
        </small>
      );
    } else {
      return (
        <small>
          <span className="fahrenheit" onClick={this.convertTemp}>
            °C
          </span>
          | °F
        </small>
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body bg-light">
          {this.label()}
          <h5 className="card-title">
            <strong> {this.props.name} </strong>
          </h5>
          <p className="card-text city-temperature">
            {this.loadTemperature()}
            {this.conversion()}
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
