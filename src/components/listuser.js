import React from "react";
import _ from "lodash";

class Listuser extends React.Component {
  componentWillMount() {
    this.props.requestUsers();
  }
  render() {
    const usersList = _.map(this.props.data, (listitem, index) => (
      <tbody key={index}>
        <tr>
          <td>{listitem.id}</td>
          <td>{listitem.name}</td>
          <td>{listitem.email}</td>
          <td>{listitem.role}</td>
        </tr>
      </tbody>
    ));
    return (
      <div className="container">
        <label>Users List</label>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Role</th>
            </tr>
          </thead>
          {usersList}
        </table>
      </div>
    );
  }
}

export default Listuser;