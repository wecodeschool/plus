import React, { Component } from "react";
import City from "./City";
import "./Weather.css";

export default class Weather extends Component {
  render = () => {
    return (
      <div>
        <h1>Weather App</h1>

        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Desciption</th>
              <th>Icon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <City name="Lisbon"/>
            <City name="Berlin" />
            <City name="Dallas" />
            <City name="New York" />
            <City name="Milan" />
          </tbody>
        </table>
      </div>
    );
  }
}
