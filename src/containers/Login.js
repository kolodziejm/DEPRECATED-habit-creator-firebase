import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class Login extends Component {
    render() {
        return (
            <div>
                <Typography variant="h1">Hello world</Typography>
            </div>
        )
    }
}

export default withRouter(Login);