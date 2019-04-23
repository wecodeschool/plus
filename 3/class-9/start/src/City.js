import React, { Component } from "react";
import "./City.css";

export default class City extends Component {
  render() {
    return (
      <tr>
        <td>Lisbon</td>
        <td>17°C</td>
        <td>
          <span className="badge badge-danger">Hot</span>
        </td>
        <td>
          <button type="button" className="btn btn-outline-light btn-sm">
            Learn more
          </button>
        </td>
      </tr>
    );
  }
}
