import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="App">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
