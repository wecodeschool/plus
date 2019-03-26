import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DateUtility from "./DateUtility";
import Api from "./Api";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import "./Weather.sass";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { city: props.city };
  }

  componentDidMount = () => {
    this.search();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.search();
  };

  search = () => {
    if (this.state.city) {
      let url = `${Api.rootUrl}/data/2.5/weather?appid=${
        Api.secretKey
      }&units=metric&q=${this.state.city}`;

      axios.get(url).then(response => {
        let date = new Date(response.data.dt * 1000);
        this.setState({
          location: response.data.name,
          icon: response.data.weather[0].icon,
          date: new DateUtility(date).friendlyDate(),
          temperature: Math.round(response.data.main.temp)
        });
      });
    }
  };

  update = event => {
    this.setState({
      city: event.currentTarget.value
    });
  };

  temperature = () => {
    if (this.state.temperature) {
      return (
        <div>
          Temperature in {this.state.location} is{" "}
          <strong>{this.state.temperature} degrees</strong>
          <small className="time">{this.state.date}</small>
          <WeatherIcon code={this.state.icon} size={96} />
          <WeatherForecast city={this.state.location} />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>
          She Codes Weather <span className="badge badge-primary">Live</span>
        </h1>

        <div className="row">
          <div className="col-md-7">
            <Link to="/paris">Paris</Link> | <Link to="/sydney">Sydney</Link> |{" "}
            <Link to="/san-francisco">San Francisco</Link>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className="row">
                <div className="col-md-9">
                  <input
                    name="city"
                    autoComplete="off"
                    placeholder="Type a city"
                    onChange={event => this.update(event)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="submit"
                    disabled={!this.state.city}
                    className="form-control btn btn-success"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.temperature()}
      </div>
    );
  }
}
