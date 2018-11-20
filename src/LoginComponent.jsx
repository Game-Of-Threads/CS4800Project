import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "", // Multi-purpose message to be displayed to the user, blank by default
            messageStatus: "black", //color of the message
            // NOTE: "success" for green "warning" for yellow "danger" for red
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        //Updates the state of the component on every change.
        //Incredibly useful, should just copy/paste into most components
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="box">
                    <h1 className="title is-2">Get Started with Bronco Notes!</h1>
                    <label className={`has-text-${this.state.messageStatus}`}> {this.state.message}<br></br></label>
                    <br></br>
                    <Link to="/notebook"><button className="button is-primary" onClick={this.attemptLogin}>Login</button></Link>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
