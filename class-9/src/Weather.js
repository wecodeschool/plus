import React, { Component } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import PropTypes from "prop-types";
import "./Weather.sass";

export default class Weather extends Component {
  static propTypes = {
    city: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city
    };
  }

  componentDidMount = () => {
    if (this.props.city) {
      this.search(this.props.city);
    }
  };

  search = city => {
    let root = "https://api.openweathermap.org";
    let key = "9d92245d08bdc72ed4ac970627d76d46";
    let url = `${root}/data/2.5/weather?appid=${key}&units=metric&q=${city}`;

    axios.get(url).then(response => {
      this.setState({
        location: response.data.name,
        temperature: Math.round(response.data.main.temp),
        date: this.formatDate(new Date(response.data.dt * 1000))
      });
    });
  };

  formatDate = date => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    return `${days[date.getDay()]} ${date.getHours()}:${minutes}`;
  };

  temperature = () => {
    if (this.state.temperature) {
      return (
        <div>
          Temperature in {this.state.location} is {this.state.temperature}{" "}
          degrees
          <br />
          <strong>{this.state.date}</strong>
        </div>
      );
    }
  };

  updateCity = city => {
    this.setState(
      {
        city: city
      },
      () => {
        this.search();
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-7">
            <Navigation />
            <SearchForm handleSearch={this.search} />
          </div>
          <div className="col-sm-5">{this.temperature()}</div>
        </div>
      </div>
    );
  }
}
