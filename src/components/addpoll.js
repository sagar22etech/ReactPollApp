import React, { Component } from "react";
import Header from "../genric/header";

export default class AddPoll extends Component {
  onAdd = (e) => {
    this.props.addOptions({value:e.target.value,vote:0});
  };
  onDelete = (e) => {
    this.props.deleteOptions(e.target.id);
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
              {this.props.formData.options.map((data, i) => (
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
                    id={i}
                    onClick={e=>this.onDelete(e)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className="button">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e=>this.onAdd(e)}
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
