import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
      fieldsValue: false
    };
  }

  onSubmit = (e) => {
      e.preventDefault();
    console.log("its clicked");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
    });
  };

  render() {
    return (
      <div className="container-fluid bg-light py-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center mb-4">Sign-up</h3>
              {this.state.password === this.state.confirmPassword ? null : (
                <span>Password Donot Match</span>
              )}
              <form onSubmit={(e)=>{this.onSubmit(e)}}>
                <fieldset>
                  <div className="form-group has-error">
                    <input
                      className="form-control input-lg"
                      placeholder="Name"
                      name="name"
                      type="text"
                      onChange={e => {
                        this.onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group has-error">
                    <input
                      className="form-control input-lg"
                      placeholder="E-mail Address"
                      name="email"
                      type="email"
                      onChange={e => {
                        this.onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group has-success">
                    <input
                      className="form-control input-lg"
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={e => {
                        this.onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group has-success">
                    <input
                      className="form-control input-lg"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      onChange={e => {
                        this.onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control input-lg"
                      name="role"
                      value={this.state.role}
                      onChange={e => {
                        this.onChange(e);
                      }}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <input
                    className="btn btn-lg btn-primary btn-block"
                    value="Sign Me Up"
                    type="submit"
                  />
                  <Link to={`/`}>Login</Link>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
