import React from "react";
import Header from "../genric/header";
import LoadingScreen from "../genric/loadingScreen";

class Listpolls extends React.Component {
  componentWillMount() {
    this.props.requestPolls();
  }
  handleClick = (pid, oid) => {
    this.props.deleteOption({
      pid: pid,
      oid: oid
    });
  };
  render() {
    const data = this.props.data;
    let pollsList;
    if (
      Object.keys(data).length == 0 ||
      this.props.conditions.isDeleteOptionLoading
    ) {
      return (
        <div className="container">
          <Header />
          <LoadingScreen />
        </div>
      );
    } else {
      pollsList = data.map((pollitem, index) => (
        <div className="card-body bg-info col-md-4" key={index}>
          <h4 className="card-title text-center bg-dark text-white">
            {pollitem.title}
          </h4>
          <ul className="list-unstyled">
            {pollitem.options.map((pollitemoption, id) => (
              <li className="list-group-item bg-info text-white" key={id}>
                <span>
                  <span>
                    Option {id + 1}: {pollitemoption.options}
                  </span>
                  &nbsp;&nbsp;
                  <span>Votes: {pollitemoption.vote}</span>
                  <span
                    className="badge badge-pill badge-danger"
                    onClick={() =>
                      this.handleClick(pollitem.id, pollitemoption.opt_id)
                    }
                  >
                    Delete
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="row">
            <button type="button" className="btn btn-success col-md-4">
              Add Options
            </button>
            <button type="button" className="btn btn-danger col-md-4">
              Delete Poll
            </button>
            <button type="button" className="btn btn-secondary col-md-4">
              Edit Title
            </button>
          </div>
        </div>
      ));
    }
    return (
      <div className="container">
        <Header />
        <div className="row">{pollsList}</div>
      </div>
    );
  }
}

export default Listpolls;
