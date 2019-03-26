import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchForm extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  update = event => {
    this.setState({
      city: event.currentTarget.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.city);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div className="form-group">
          <input
            name="city"
            type="text"
            className="form-control"
            placeholder="Seach for a city..."
            onChange={event => this.update(event)}
            value={this.state.city}
            autoComplete="off"
          />
        </div>
        <input
          type="submit"
          disabled={!this.state.city}
          className="btn btn-success"
        />
      </form>
    );
  }
}
