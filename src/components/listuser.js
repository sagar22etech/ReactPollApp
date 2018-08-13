import React from "react";
import Header from '../genric/header';
import LoadingScreen from '../genric/loadingScreen';

class Listuser extends React.Component {
  componentWillMount() {
    this.props.requestUsers();
  }
  render() {
    const data = this.props.data;
    let usersList;
    if (Object.keys(data).length == 0) {
      return (<div className="container">
        <Header/>
        <LoadingScreen/>
      </div>);
    } else {
      usersList = data.map((listitem, index) => (
        <tbody key={index}>
          <tr>
            <td>{listitem.id}</td>
            <td>{listitem.name}</td>
            <td>{listitem.email}</td>
            <td>{listitem.role}</td>
          </tr>
        </tbody>
      ));
    }
    return (
      <div className="container">
        <Header/>
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
