import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import fire from './fire';

import Login from './containers/Login';
import Register from './containers/Register';
import theme from './theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
class App extends Component {

  // method with fire.auth().onAuthStateChanged() in componentDidMount()

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          {/* Rest of the paths, change them to protected later! */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
