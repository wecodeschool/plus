import React, { Component } from "react";
import City from "./City";
import "./Weather.css";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Feels like</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <City name="Lisbon" temperature={17} />
            <City name="Paris" temperature={13} />
            <City name="New York" temperature={20} />
            <City name="Moscow" temperature={3} />
            <City name="Sydney" temperature={20} />
            <City name="San Francisco" temperature={27} />
          </tbody>
        </table>
      </div>
    );
  }
}
