import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <Link to="/">Awesome Weather App</Link>{" "}
          <Link to="/about">
            <span className="badge badge-primary">about me</span>
          </Link>
        </h1>
        <Routes />
      </div>
    );
  }
}
