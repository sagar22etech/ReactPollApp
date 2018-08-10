import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import storageHelper from "../services/storagehelper";

export default class Login extends Component {
  onChange = e => {
    this.props.loginFormData({ name: e.target.type, value: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.requestLogin({
      email: this.props.formData.email,
      password: this.props.formData.password
    });
  };
  render() {
    if (storageHelper() && this.props.isLoginSuccess) {
      return <Redirect to="/userlist" />;
    }
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={this.onChange}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={this.onChange}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign In
          </button>
          <Link to={`/signup`}>Sign Up</Link>
        </form>
      </div>
    );
  }
}
