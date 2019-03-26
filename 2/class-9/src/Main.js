import React, { Component } from "react";

import Weather from "./Weather";
import { Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" render={() => <Weather />} />
        <Route exact={true} path="/paris" render={() => <Weather city="Paris" />} />
        <Route
          exact={true}
          path="/sydney"
          render={() => <Weather city="Sydney" />}
        />
        <Route
          exact={true}
          path="/san-francisco"
          render={() => <Weather city="San Francisco" />}
        />
      </div>
    );
  }
}
