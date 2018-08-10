import React, { Component } from "react";
import Header from "../genric/header";

export default class AddPoll extends Component {
  onAdd = () => {
    this.props.addOptions(1);
  };
  onDelete = () => {
    this.props.deleteOptions();
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <div id="container">
            <form onSubmit={e => this.onFormSubmit(e)}>
              <div className="form-group">
                <label htmlFor="polltitle">Title Of The Poll</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Poll Title"
                />
              </div>
              {this.props.formData.addOptions.map((data, i) => (
                <div className="form-group form-inline" key={i}>
                  <label htmlFor="options">Option</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Option"
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onDelete}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className="button">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onAdd}
                >
                  Add
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
