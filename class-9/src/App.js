import React, { Component } from "react";
import MainEnd from "./MainEnd";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainEnd />
      </BrowserRouter>
    );
  }
}

export default App;
