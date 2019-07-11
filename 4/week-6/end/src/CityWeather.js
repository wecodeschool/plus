import React, { Component } from "react";
import "./CityWeather.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default class CityWeather extends Component {
  state = {
    loaded: false,
    unit: "metrics"
  };
  label() {
    if (this.state.temp < 0)
      return <div className="badge badge-primary"> FREEZING </div>;
    if (this.state.temp > 25)
      return <div className="badge badge-danger"> HOT </div>;
    if (this.state.temp < 10)
      return <div className="badge badge-info"> COLD </div>;
    return <div className="badge badge-warning"> WARM </div>;
  }

  convertTemp = event => {
    event.preventDefault();
    if (this.state.units === "metrics") {
      this.setState({
        temp: Math.round((this.state.metricTemp * 9) / 5 + 32),
        units: "imperial"
      });
    } else {
      this.setState({
        temp: Math.round(this.state.metricTemp),
        units: "metrics"
      });
    }
  };

  updateTemperature = response => {
    this.setState({
      loaded: true,
      metricTemp: response.data.main.temp,
      temp: Math.round(response.data.main.temp),
      units: "metrics"
    });
  };

  nav = () => {
    if (this.state.units === "metrics") {
      return (
        <small>
          °C |{" "}
          <span
            className="fahrenheit"
            onClick={event => this.convertTemp(event)}
          >
            °F
          </span>
        </small>
      );
    } else {
      return (
        <small>
          <span
            className="fahrenheit"
            onClick={event => this.convertTemp(event)}
          >
            °C
          </span>{" "}
          | °F
        </small>
      );
    }
  };

  temperature = () => {
    if (this.state.loaded) {
      return (
        <p className="card-text city-temperature">
          {this.state.temp}
          {this.nav()}
        </p>
      );
    } else {
      let city = this.props.name;
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(this.updateTemperature);
      return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
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
          {this.temperature()}
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
