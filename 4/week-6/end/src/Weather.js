import React, { Component } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Search from "./Search";
import ReactLoading from "react-loading";
import "./Weather.css";

class Weather extends Component {
  apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  state = {
    loaded: false
  };

  loadWeather = response => {
    this.setState({
      loaded: true,
      weather: {
        place: response.data.name,
        date: response.data.dt,
        description: response.data.weather[0].description,
        precipitation: 0,
        temperature: Math.round(response.data.main.temp),
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  search = city => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      this.apiKey
    }&units=metric`;

    this.setState({ loaded: false });

    axios.get(url).then(this.loadWeather);
  };

  componentDidMount = () => {
    this.search(this.props.city);
  };

  render = () => {
    if (this.state.loaded) {
      return (
        <div>
          <Search submit={this.search} />

          <h1>{this.state.weather.place}</h1>
          <ul>
            <li>
              <FormattedDate value={this.state.weather.date} />
            </li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <div className="float-left">
                  <WeatherIcon icon={this.state.weather.icon} />
                </div>

                <div className="temperature float-left">
                  {this.state.weather.temperature}
                  <small>°C</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Precipitation: {this.state.weather.precipitation}%</li>
                <li>Humidity: {this.state.weather.humidity}%</li>
                <li>Wind: {this.state.weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Search submit={this.search} />
          <ReactLoading type="bubbles" color="#333" />
        </div>
      );
    }
  };
}

export default Weather;
