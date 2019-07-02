import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    let heading = "Weather App";

    return (
      <div>
        <h1>{heading}</h1>
        <div className="row">
          <div className="col-md-4">
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
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <div className="badge badge-danger">HOT</div>
                <h5 className="card-title">Sydney</h5>
                <p className="card-text">
                  5<small>°C</small>
                </p>
                <a href="#" className="btn btn-primary shadow-sm">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-light">
                <div className="badge badge-danger">HOT</div>
                <h5 className="card-title">Berlin</h5>
                <p className="card-text">
                  30
                  <small>°C</small>
                </p>
                <a href="#" className="btn btn-primary shadow-sm">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
