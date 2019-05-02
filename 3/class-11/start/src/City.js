import React, { Component } from "react";
import CityTemperature from "./CityTemperature";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./City.css";


export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.refresh()
  }

  refresh = () => {
    let key      = "5f472b7acba333cd8a035ea85a0d4d4c";
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${endpoint}?appid=${key}&q=${this.props.name}&units=metric`;
    axios.get(url).then((response) => {
      this.setState({
        loaded:      true,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].main,
        icon:        `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
      });
    });
  }

  render = () => {
    if (this.state.loaded) {
      return (
        <tr>
          <td>
          {this.props.name}</td>
          <td>
            <CityTemperature temperature={this.state.temperature} />
          </td>
          <td>{this.state.description}</td>
          <td><img src={this.state.icon} alt={`${this.state.name} Icon`} /></td>
          <td>
            <button className="btn btn-outline-primary btn-sm" onClick={this.refresh}>
              Refresh
            </button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td colSpan="5">
            <Loader 
              type="ThreeDots"
              color="#212428"
              height="30" 
              width="30"
            />  
          </td>
        </tr>
      );
    }
  } 
}
