import React, { Component } from "react";
import CityTemperature from "./CityTemperature";
import "./City.css";

export default class City extends Component {
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
        <td>
          <span className="badge badge-danger">Hot</span>
        </td>
        <td>
          <button type="button" className="btn btn-outline-light btn-sm">
            Learn more
          </button>
        </td>
      </tr>
    );
  }
}
