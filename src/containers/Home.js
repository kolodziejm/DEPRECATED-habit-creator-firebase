import React, { Component } from 'react'

import Navbar from '../components/Navbar';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar navValue={0} />
            </React.Fragment>
        )
    }
}

export default Home;