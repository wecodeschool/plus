import React, { Component } from "react";
import CityTemperature from "./CityTemperature";
import "./City.css";

export default class City extends Component {
  badge() {
    if (this.props.temperature < 10) {
      return <span className="badge badge-primary">cold</span>;
    } else {
      if (this.props.temperature < 20) {
        return <span className="badge badge-warning">warm</span>;
      } else {
        return <span className="badge badge-danger">hot</span>;
      }
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <CityTemperature
            temperature={this.props.temperature}
            unit="metrics"
          />
          <CityTemperature
            temperature={this.props.temperature}
            unit="imperial"
          />
        </td>
        <td>{this.badge()}</td>
        <td>
          <button type="button" className="btn btn-outline-light btn-sm">
            Learn more
          </button>
        </td>
      </tr>
    );
  }
}
