import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return(
        <nav className="navbar navbar-inverse bg-primary">
        <span className="navbar-brand" href="#">Polling App</span>
        <button className="btn btn-outline-success" type="submit">
          Logout
        </button>
      </nav>);
}
} 