import React, { Component } from "react";
import City from "./City";
import "./App.css";

export default class App extends Component {
  render() {
    let title = "Weather App";
    return (
      <div>
        <h1>{title}</h1>
        <div className="row">
          <div className="col-md-4 mb-5">
            <City name="Lisbon" temperature={22} />
          </div>
          <div className="col-md-4 mb-5">
            <City name="Berlin" temperature={20} />
          </div>
          <div className="col-md-4 mb-5">
            <City name="Sydney" temperature={8} />
          </div>
          <div className="col-md-4 mb-5">
            <City name="Moscow" temperature={18} />
          </div>
          <div className="col-md-4 mb-5">
            <City name="New York" temperature={30} />
          </div>
          <div className="col-md-4 mb-5">
            <City name="Rio do Janeiro" temperature={27} />
          </div>
        </div>
      </div>
    );
  }
}
