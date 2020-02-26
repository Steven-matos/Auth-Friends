import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import FriendsList from './component/FriendsList';
import Login from './component/Login';
import Nav from './component/Nav';

function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
      <PrivateRoute exact path="/friends-list" component={FriendsList} />
      <Route exact path='/login' component={Login} />
      <Route path='/' component={Login}/>
      <Route component={Login} />
    </Switch>
    </Router>
  );
}

export default App;
