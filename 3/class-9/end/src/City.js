import React, { Component } from "react";
import "./City.css";

export default class City extends Component {
  farenheiht() {
    alert("This feature is not available yet");
  }

  render() {
    return (
      <tr>
        <td>
          <strong>{this.props.name}</strong>
        </td>
        <td>
          {this.props.temperature}
          <span className="unit">
            °C |{" "}
            <span className="farenheiht" onClick={this.farenheiht}>
              °F
            </span>
          </span>
        </td>
        <td>
          <a
            href={`https://www.google.com/search?q=weather+${this.props.name}`}
            className="btn btn-primary"
            target="_blank"
          >
            Learn more
          </a>
        </td>
      </tr>
    );
  }
}
