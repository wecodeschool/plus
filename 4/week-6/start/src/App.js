import React, { Component } from "react";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Weather city="Lisbon" />
      </div>
    );
  }
}
