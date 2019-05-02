import React, { Component } from "react";
import "./CityTemperature.css";

export default class CityTemperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: 'metrics',
      temperature: props.temperature
    }
  }

  changeUnit = () => {
    if (this.state.unit === 'metrics') {
      this.setState({
        temperature: Math.round(this.props.temperature * (9 / 5) + 32),
        unit: 'imperial'
      });
    } else {
      this.setState({
        temperature: this.props.temperature,
        unit: 'metrics'
      });
    }
  }

  render = () => {
    if (this.state.unit === "metrics") {
      return (
        <div>
          {this.state.temperature}°C     
          | <a href="#" onClick={() => this.changeUnit()}>°F</a>
        </div>
      );

    } else {
      return (
        <div>
          {this.state.temperature}°F 
          | <a href="#" onClick={() => this.changeUnit()}>°C</a>
        </div>
      )
    }
  }
}
