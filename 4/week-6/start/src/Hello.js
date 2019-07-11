import React, { Component } from "react";

export default class Hello extends Component {
  state = {
    message: "Hello"
  };

  changeMessage = () => {
    this.setState({
      message: "Hi"
    });
  };

  render() {
    return <h1 onClick={this.changeMessage}>{this.state.message}</h1>;
  }
}
