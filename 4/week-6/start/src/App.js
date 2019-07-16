import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card m-5">
          <div className="card-body">
            <Weather city="Lisbon" />
          </div>
        </div>
      </div>
    );
  }
}
