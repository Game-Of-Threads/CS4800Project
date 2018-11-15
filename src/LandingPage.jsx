import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="box has-text-centered">
                    <h1 className="title"><font size="7">Welcome to All Notes!</font></h1>
                    <div className="box has-text-centered">
                        <Link to="/notebook"><button className="button is-success is-large">Start Taking Notes!</button></Link>
                        <br></br> <br></br>
                        <Link to="/login"><button className="button is-info">Login</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;