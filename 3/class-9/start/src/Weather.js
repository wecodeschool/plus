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
              <th scope="col">City</th>
              <th scope="col">Temperature</th>
              <th scope="col">Feels like</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <City />
          </tbody>
        </table>
      </div>
    );
  }
}
