import React, { Component } from 'react'

import Navbar from '../components/Navbar';
class Store extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar navValue={1} />
            </React.Fragment>
        )
    }
}

export default Store;