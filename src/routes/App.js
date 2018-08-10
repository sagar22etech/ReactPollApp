import React, { Component } from 'react';
import Login from '../components/login';
import Signup from '../containers/signupcontainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      </div>
      </Router>  
    )
  }
}

export default App;
