import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.apiRootUrl = "https://api.openweathermap.org/data/2.5/weather";
    this.state = {
      searching: false,
      city: "",
      temperature: null
    };
  }

  submit = event => {
    event.preventDefault();
    let url = `${this.apiRootUrl}?appid=${this.props.apiKey}&units=metric&q=${
      this.state.city
    }`;

    this.setState({ searching: true });
    this.refresh(url);
  };

  update = event => {
    this.setState({
      city: event.currentTarget.value
    });
  };

  currentLocation = event => {
    event.preventDefault();
    this.setState({ searching: true });

    navigator.geolocation.getCurrentPosition(position => {
      let url = `${this.apiRootUrl}?appid=${
        this.props.apiKey
      }&units=metric&lat=${position.coords.latitude}&lon=${
        position.coords.longitude
      }`;
      this.refresh(url);
    });
  };

  refresh = url => {
    axios.get(url).then(response => {
      this.setState({
        searching: false,
        city: response.data.name,
        temperature: Math.round(response.data.main.temp)
      });
    });
  };

  render() {
    if (this.state.searching) {
      return (
        <ReactLoading
          type="spinningBubbles"
          color="#7d53ef"
          height={50}
          width={40}
        />
      );
    } else if (this.state.temperature) {
      return (
        <h2>
          It is currently {this.state.temperature} degrees in {this.state.city}
        </h2>
      );
    } else {
      return (
        <div>
          <form onSubmit={event => this.submit(event)}>
            <input
              type="text"
              placeholder="Type a city here"
              autoComplete="off"
              onChange={event => this.update(event)}
            />
            <input type="submit" value="Search" />
            <button onClick={event => this.currentLocation(event)}>
              Current Location
            </button>
          </form>
        </div>
      );
    }
  }
}
