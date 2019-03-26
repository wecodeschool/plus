import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> | <Link to="/lisbon">Lisbon</Link> |{" "}
        <Link to="/moscow">Moscow</Link> | <Link to="/paris">Paris</Link> |{" "}
        <Link to="/new-york">New York</Link>
      </div>
    );
  }
}
