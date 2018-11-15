import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const center = {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh'         
        }

        return (
            <div className="container" style={center}>
                <div className="box has-text-centered">
                    <h1 className="title"><font size="7">Welcome to All Notes!</font></h1>
                    <div className="box has-text-centered">
                        <Link to="/home"><button className="button is-success is-large">Start Taking Notes!</button></Link>
                        <br /><br />
                        <Link to="/login"><button className="button is-info">Login</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;