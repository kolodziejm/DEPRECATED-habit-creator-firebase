import React, { Component } from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import fire from './fire';
class App extends Component {

  // method with fire.auth().onAuthStateChanged() in componentDidMount()

  render() {
    return (
      <div className="App">
        <Switch>
          {/* Rest of the paths, change them to protected later! */}
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
