import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      searching: false
    };
  }

  search = event => {
    event.preventDefault();
    let root = "https://api.openweathermap.org";
    let key = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `${root}/data/2.5/weather?appid=${key}&units=metric&q=${
      this.state.city
    }`;

    this.setState({ searching: true });
    axios.get(url).then(response => {
      this.setState({
        searching: false,
        city: response.data.name,
        temperature: Math.round(response.data.main.temp)
      });
    });
  };

  current = event => {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(position => {
      let key = "5f472b7acba333cd8a035ea85a0d4d4c";
      let root = "https://api.openweathermap.org";
      let url = `${root}/data/2.5/weather?appid=${key}&units=metric&lat=${
        position.coords.latitude
      }&lon=${position.coords.longitude}`;

      this.setState({ searching: true });
      axios.get(url).then(response => {
        this.setState({
          searching: false,
          city: response.data.name,
          temperature: Math.round(response.data.main.temp)
        });
      });
    });
  };

  update = event => {
    this.setState({
      city: event.currentTarget.value
    });
  };

  render() {
    if (this.state.searching) {
      return (
        <ReactLoading type="bubbles" color="blue" height={667} width={375} />
      );
    } else {
      if (this.state.temperature) {
        return (
          <div>
            Temperature in {this.state.city} is {this.state.temperature} degrees
          </div>
        );
      } else {
        return (
          <div>
            <p>Search for a city...</p>
            <form onSubmit={event => this.search(event)}>
              <input name="city" onChange={event => this.update(event)} />
              <input type="submit" disabled={this.state.city.length === 0} />
            </form>
            <button onClick={event => this.current(event)}>
              Current Location
            </button>
          </div>
        );
      }
    }
  }
}
