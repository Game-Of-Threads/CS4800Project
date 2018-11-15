import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "", // Multi-purpose message to be displayed to the user, blank by default
            messageStatus: "black", //color of the message
            // NOTE: "success" for green "warning" for yellow "danger" for red
            username: "",
            password: ""
        }
        this.updateState = this.updateState.bind(this);
        this.attemptLogin = this.attemptLogin.bind(this);
    }

    updateState(e) {
        //Updates the state of the component on every change.
        //Incredibly useful, should just copy/paste into most components
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    attemptLogin(e) {
    }

    render() {

        const center = {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh'         
        }

        return (
            <div style={center}>
                <div className="container">
                    <h1 className="title has-text-centered"><font size="7">All Notes</font></h1>
                    <div className="box">
                        <label className="label">Email</label>
                        <input type="text" className="input" id="username" onChange={this.updateState} />
                        <label className="label"><br></br>Password</label>
                        <input type="password" className="input" id="password" onChange={this.updateState} />
                        <label className={`has-text-${this.state.messageStatus}`}> {this.state.message}<br></br></label>
                        <br></br>
                        <Link to="/notebook"><button className="button is-primary" onClick={this.attemptLogin}>Login</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
