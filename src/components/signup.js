import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="container-fluid bg-light py-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center mb-4">Sign-up</h3>
              <fieldset>
                <div className="form-group has-error">
                  <input
                    className="form-control input-lg"
                    placeholder="E-mail Address"
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    placeholder="Confirm Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control input-lg">
                    <option defaultValue="">Role</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <input
                  className="btn btn-lg btn-primary btn-block"
                  value="Sign Me Up"
                  type="submit"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
