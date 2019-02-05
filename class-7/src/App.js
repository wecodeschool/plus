import React, { Component } from "react";
import Weather from "./Weather";
import "./App.css";

export default class App extends Component {
  render() {
    return <Weather apiKey="5f472b7acba333cd8a035ea85a0d4d4c" />;
  }
}
