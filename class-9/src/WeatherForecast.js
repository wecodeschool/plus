import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import DateUtil from "./DateUtil";

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.city
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    let root = "https://api.openweathermap.org";
    let key = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `${root}/data/2.5/forecast?appid=${key}&units=metric&q=${
      this.state.city
    }`;

    axios.get(url).then(response => {
      let forecast = response.data.list;
      let dailyForecast = [7, 15, 23, 31, 39].map(index => {
        return {
          temperature: Math.round(forecast[index].main.temp),
          icon: forecast[index].weather[0].icon,
          day: new DateUtil(new Date(forecast[index].dt * 1000))
        };
      });
      this.setState({ forecast: dailyForecast });
    });
  }
  render() {
    if (this.state.forecast) {
      return (
        <div className="row">
          {this.state.dailyForecast.map((weather, index) => {
            return <div className={index}>{weather.temperature}</div>;
          })}
        </div>
      );
    }
  }
}
