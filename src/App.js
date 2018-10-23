import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import fire from './fire';

import Login from './containers/Login';
import Home from './containers/Home';
import Register from './containers/Register';
import theme from './theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import Manage from './containers/Manage';
import Store from './containers/Store';
import Achievements from './containers/Achievements';

class App extends Component {

  // method with fire.auth().onAuthStateChanged() in componentDidMount()
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/home');
        console.log(user)
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          {/* Rest of the paths, change them to protected later! */}
          <Route path="/achievements" component={Achievements} />
          <Route path="/store" component={Store} />
          <Route path="/manage" component={Manage} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
