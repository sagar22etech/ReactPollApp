import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return(
        <nav className="navbar navbar-inverse bg-primary">
        <span className="navbar-brand" href="#">Polling App</span>
        <Link to={`/addpoll`}>Add Poll</Link>
        <Link to={`/pollslist`}>List Poll</Link>
        <Link to={`/userlist`}>User List</Link>
        <button className="btn btn-outline-success" type="submit">
          Logout
        </button>
      </nav>);
}
} 