import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label
    };
  }

  changeLabel() {
    this.setState({
      label: prompt("Enter the new title")
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.label}</h2>
        <button onClick={() => this.changeLabel()}>Change Title</button>
      </div>
    );
  }
}
