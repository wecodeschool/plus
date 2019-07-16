import React, { Component } from "react";
import axios from "axios";
import HumanDate from "./HumanDate";
import "./Weather.css";

export default class Weather extends Component {
  apiKey = "f6478028e39d2e4c2c17beea8edcfc21";
  apiRoot = "https://api.openweathermap.org";
  state = {
    loaded: false
  };

  showResults = response => {
    console.log(response);
    this.setState({
      loaded: true,
      weather: {
        date: response.data.dt,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  componentDidMount() {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${this.props.city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.showResults);
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h1>{this.state.weather.city}</h1>
          <ul>
            <li>
              <HumanDate timestamp={this.state.weather.date} />
            </li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 ">
              <div className="clearfix">
                <img
                  src={this.state.weather.iconUrl}
                  alt=""
                  className="float-left"
                />
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
      return <h1>Loading...</h1>;
    }
  }
}
