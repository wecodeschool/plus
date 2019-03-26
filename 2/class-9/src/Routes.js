import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";
import About from "./About";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          path="/lisbon"
          exact={true}
          render={() => <Weather city="Lisbon" />}
        />
        <Route
          path="/moscow"
          exact={true}
          render={() => <Weather city="Moscow" />}
        />
        <Route
          path="/new-york"
          exact={true}
          render={() => <Weather city="New York" />}
        />
        <Route
          path="/paris"
          exact={true}
          render={() => <Weather city="Paris" />}
        />
        <Route path="/" exact={true} render={() => <Weather />} />
        <Route path="/about" exact={true} render={() => <About />} />
      </div>
    );
  }
}
