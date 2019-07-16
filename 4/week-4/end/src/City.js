import React, { Component } from "react";
import "./City.css";

export default class City extends Component {
  badge() {
    if (this.props.temperature < 10) {
      return <div className="badge badge-info">COLD</div>;
    } else {
      if (this.props.temperature < 25) {
        return <div className="badge badge-warning">WARM</div>;
      } else {
        return <div className="badge badge-danger">HOT</div>;
      }
    }
  }

  farenheit() {
    alert("This feature is not available yet");
  }

  render() {
    return (
      <div className="card  bg-light">
        <div className="card-body">
          {this.badge()}
          <h5 className="card-title">
            <strong>{this.props.name}</strong>
          </h5>
          <p class="card-text">
            <strong>{this.props.temperature}</strong>
            <small>
              °C |{" "}
              <span className="farenheit" onClick={this.farenheit}>
                °F
              </span>
            </small>
          </p>

          <a
            href={`https://www.google.com/search?q=weather+${this.props.name}`}
            className="btn btn-primary shadow-sm"
            target="_blank"
          >
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
