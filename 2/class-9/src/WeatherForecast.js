import React, { Component } from "react";
import axios from "axios";
import Api from "./Api";
import WeatherIcon from "./WeatherIcon";
import DateUtility from "./DateUtility";

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
      city: props.city
    };
    this.refresh();
  }

  componentWillReceiveProps = nextProp => {
    this.setState({ city: nextProp.city }, () => {
      this.refresh();
    });
  };

  refresh = () => {
    let url = `${Api.rootUrl}/data/2.5/forecast?appid=${
      Api.secretKey
    }&units=metric&q=${this.state.city}`;

    axios.get(url).then(response => {
      let forecast = response.data.list;
      let dailyForecast = [7, 15, 23, 31, 39].map(index => {
        let date = new Date(forecast[index].dt * 1000);
        return {
          temperature: Math.round(forecast[index].main.temp),
          icon: forecast[index].weather[0].icon,
          day: new DateUtility(date).shortDay()
        };
      });

      this.setState({
        forecast: dailyForecast
      });
    });
  };

  render() {
    if (this.state.forecast) {
      return (
        <div className="row">
          {this.state.forecast.map((weather, index) => {
            return (
              <div className="col-md-2" key={index}>
                {weather.day} <br />{" "}
                <WeatherIcon code={weather.icon} size={24} /> <br />
                {weather.temperature}
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}
