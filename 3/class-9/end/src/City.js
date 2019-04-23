import React, { Component } from "react";
import "./City.css";

export default class City extends Component {
  farenheiht() {
    alert("This feature is not available yet");
  }

  feeling() {
    if (this.props.temperature < 5) {
      return <span className="badge badge-primary">COLD</span>;
    } else {
      if (this.props.temperature < 15) {
        return <span className="badge badge-warning">WARM</span>;
      } else {
        return <span className="badge badge-danger">HOT</span>;
      }
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          {this.props.temperature}
          <span className="unit">
            °C |{" "}
            <span className="farenheiht" onClick={this.farenheiht}>
              °F
            </span>
          </span>
        </td>
        <td>{this.feeling()}</td>
        <td>
          <a
            href={`https://www.google.com/search?q=weather+${this.props.name}`}
            className="btn btn-outline-light btn-sm"
            target="_blank"
          >
            Learn more
          </a>
        </td>
      </tr>
    );
  }
}
