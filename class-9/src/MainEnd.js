import React, { Component } from "react";

import End from "./End";
import { Route } from "react-router-dom";

export default class MainEnd extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" render={() => <End />} />
        <Route exact={true} path="/paris" render={() => <End city="Paris" />} />
        <Route
          exact={true}
          path="/sydney"
          render={() => <End city="Sydney" />}
        />
        <Route
          exact={true}
          path="/san-francisco"
          render={() => <End city="San Francisco" />}
        />
      </div>
    );
  }
}
