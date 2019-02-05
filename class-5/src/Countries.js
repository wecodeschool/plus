import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Countries extends Component {
  static propTypes = {
    language: PropTypes.isRequired
  };

  static defaultProps = {
    language: "portuguese"
  };

  heading() {
    if (this.props.language === "spanish") {
      return <h2>Hola!</h2>;
    } else {
      return <h2>Ola!</h2>;
    }
  }

  portugueseCountries() {
    return (
      <div>
        {this.heading()}
        <ul>
          <li>Portugal</li>
          <li>Brazil</li>
          <li>Angola</li>
        </ul>
      </div>
    );
  }

  spanishCountries() {
    return (
      <div>
        {this.heading()}
        <ul>
          <li>Chile</li>
          <li>Colombia</li>
          <li>Spain</li>
        </ul>
      </div>
    );
  }

  render() {
    if (this.props.language === "portuguese") {
      return this.portugueseCountries();
    } else {
      return this.spanishCountries();
    }
  }
}
