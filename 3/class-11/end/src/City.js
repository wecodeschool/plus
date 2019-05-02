import React, { Component } from "react";
import axios from "axios";
import CityTemperature from "./CityTemperature";
import Loader from 'react-loader-spinner'
import "./City.css";


export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    let key = '5f472b7acba333cd8a035ea85a0d4d4c';
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&q=${this.props.name}`
    axios.get(url).then((response) => {
      this.setState({
        loaded: true,
        city: response.data.name,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].main,
        temperature: Math.round(response.data.main.temp),
      });
    })
  }

  icon = () => {
    return <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.description} />;
  }

  render() {
    if (this.state.loaded) {
      return (
        <tr>
          <td>{this.state.city}</td>
          <td>
            <CityTemperature
              temperature={this.state.temperature}
            />
       
          </td>
          <td>{this.icon()}</td>
          <td>
            {this.state.description}
          </td>
          <td>
            <button
              onClick={() => this.refresh()}
              className="btn btn-outline-primary btn-sm"
            >
              Refresh
            </button>
          </td>
        </tr>
      )
    } else {
    return (
      <tr>
        <td colSpan="4">
          <Loader 
            type="ThreeDots"
              color="#000"
              height="40" 
              width="40"
          />
        </td>
      </tr>
      );
    }
  } 
}
