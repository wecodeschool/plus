import React, { Component } from "react";
import "./CityTemperature.css";

export default class CityTemperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "metrics",
      temperature: props.temperature
    };
  }

  toggleUnit = () => {
    if (this.state.unit === "metrics") {
      this.setState({
        unit: "imperial",
        temperature: Math.round(this.props.temperature * (9 / 5) + 32)
      });
    } else {
      this.setState({
        unit: "metrics",
        temperature: this.props.temperature
      });
    }
  }

  render = () => {
    if (this.state.unit === "metrics") {
      return (
        <div> 
          {this.state.temperature}°C | <a href="#" onClick={this.toggleUnit}>°F</a>
        </div>
      )  
    } else {
      return (
        <div> 
          {this.state.temperature}°F | <a href="#" onClick={this.toggleUnit}>°C</a>
        </div>
      )  
    }
    
  }
}