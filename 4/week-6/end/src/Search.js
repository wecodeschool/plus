import React, { Component } from "react";

export default class Search extends Component {
  state = {
    keyword: ""
  };

  updateKeyword = event => {
    this.setState({ keyword: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    this.props.submit(this.state.keyword);
  };

  render() {
    return (
      <div>
        {" "}
        <form onSubmit={event => this.submit(event)}>
          <input
            type="text"
            placeholder="Search a city..."
            className="form-group p-2"
            autoFocus="on"
            value={this.state.keyword}
            onChange={event => this.updateKeyword(event)}
          />
        </form>
      </div>
    );
  }
}
