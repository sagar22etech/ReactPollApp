import React, { Component } from 'react';
import Login from '../containers/logincontainer';
import Signup from '../containers/signupcontainer';
import Userlist from '../containers/listusercontainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/userlist" component={Userlist} />
      </div>
      </Router>  
    )
  }
}

export default App;
