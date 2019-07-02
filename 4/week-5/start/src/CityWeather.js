import React, { Component } from "react";

export default class CityWeather extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body bg-light">
          <div className="badge badge-danger">HOT</div>
          <h5 className="card-title">Lisbon</h5>
          <p className="card-text">
            18
            <small>°C</small>
          </p>
          <a href="#" className="btn btn-primary shadow-sm">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
