import React, { Component } from "react";
import Header from "../genric/header";

export default class AddPoll extends Component {
  onAdd = e => {
    this.props.addOptions({ value: e.target.value, vote: 0 });
  };
  onDelete = e => {
    this.props.deleteOptions(e.target.id);
  };

  onChange = e => {
    this.props.pollFormData({
      name: e.target.name,
      id: e.target.id,
      value: e.target.value,
      vote: 0
    });
  };

  onFormSubmit = e =>{
    e.preventDefault();
    this.props.pollFormRequest(this.props.formData);
    
  }

  render() {
    // console.log(this.props);

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
                  required
                  name="title"
                  onChange={e => this.onChange(e)}
                />
              </div>
              {this.props.formData.options.map((data, i) => (
                <div className="form-group form-inline" key={i}>
                  <label htmlFor="options">Option</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Option"
                    id={i}
                    required
                    value={data.option}
                    onChange={e => this.onChange(e)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    id={i}
                    onClick={e => this.onDelete(e)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className="button">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e => this.onAdd(e)}
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
