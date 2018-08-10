import React, { Component } from 'react';
import Login from '../containers/logincontainer';
import Signup from '../containers/signupcontainer';
import AddPoll from '../containers/addpollcontainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/addpoll" component={AddPoll} />
      </div>
      </Router>  
    )
  }
}

export default App;
