import React, { Component } from "react";
import "./Weather.css";
import City from "./City";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
      
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <City temperature={19} name="Lisbon" />
            <City temperature={24} name="Paris" />
            <City temperature={-4} name="Moscow" />
            <City temperature={20} name="New York" />
            <City temperature={17} name="Buenos Aires" />
          </tbody>
        </table>
      </div>
    );
  }
}
