import React from "react";

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
    if (Object.keys(data).length == 0) {
      return <p>Loading...</p>;
    } else {
      pollsList = data.map((pollitem, index) => (
        <div
          key={index}
          className="card text-secondary"
          style={{ width: "100%" }}
        >
          <div className="card-body bg-info">
            <h4 className="card-title text-center bg-dark text-white">
              {pollitem.title}
            </h4>
            <ul className="list-group list-group-flush">
              {pollitem.options.map((pollitemoption, id) => (
                <li className="list-group-item bg-info text-white" key={id}>
                  <p>
                    Option {id + 1}: {pollitemoption.options}
                  </p>
                  <p>Votes: {pollitemoption.vote}</p>
                  <button
                    onClick={() =>
                      this.handleClick(pollitem.id, pollitemoption.opt_id)
                    }
                  >
                    Delete Option
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    }
    return (
      <div className="container">
        <label>Poll List</label>
        <div>{pollsList}</div>
      </div>
    );
  }
}

export default Listpolls;
