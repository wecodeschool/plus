import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import HumanDate from "./HumanDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default class Weather extends Component {
  apiKey = "f6478028e39d2e4c2c17beea8edcfc21";
  apiRoot = "https://api.openweathermap.org";
  state = {
    loaded: false
  };

  showResults = response => {
    this.setState({
      loaded: true,
      weather: {
        date: response.data.dt,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        timezone: response.data.timezone,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  search = city => {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.showResults);
  };

  componentDidMount() {
    this.search(this.props.city);
  }

  submit = event => {
    event.preventDefault();
    this.search(this.state.keywords);
  };

  updateKeywords = event => {
    this.setState({
      keywords: event.target.value
    });
  };

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <form onSubmit={event => this.submit(event)}>
            <input
              type="text"
              placeholder="Search for a city.."
              className="p-2 mb-2 rounded border"
              autoFocus={true}
              onChange={event => this.updateKeywords(event)}
            />
          </form>
          <h1>{this.state.weather.city}</h1>
          <ul>
            <li>
              <HumanDate
                timestamp={this.state.weather.date}
                timezone={this.state.weather.timezone}
              />
            </li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 ">
              <div className="clearfix">
                <div className="float-left">
                  <WeatherIcon
                    code={this.state.weather.icon}
                    alt={this.state.weather.description}
                  />
                </div>
                <div className="temperature float-left">
                  {this.state.weather.temperature}
                  <small>°C</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {this.state.weather.humidity}%</li>
                <li>Wind: {this.state.weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <Loader type="Oval" color="#333" height="100" width="100" />
        </div>
      );
    }
  }
}
