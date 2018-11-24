import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import AppContext from './AppProvider.jsx'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "", // Multi-purpose message to be displayed to the user, blank by default
            messageStatus: "black", //color of the message
            // NOTE: "success" for green "warning" for yellow "danger" for red
        }
        this.updateState = this.updateState.bind(this);
        this.onSignInFailure = this.onSignInFailure.bind(this);
    }
    updateState(e) {
        //Updates the state of the component on every change.
        //Incredibly useful, should just copy/paste into most components
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSignInFailure(){
      console.log("Sign In failed");
    }
    render() {
        return (
          <AppContext.Consumer>
            {(context) => (
              <div className="container">
                <div className="box">
                  <h1 className="title is-2">Get Started with Bronco Notes!</h1>
                  <label className={`has-text-${this.state.messageStatus}`}> {this.state.message}<br></br></label>
                  <GoogleLogin
                    clientId="690986198979-e6btiprgsgp69hlrc5p589bsnnfbikue.apps.googleusercontent.com"
                    buttonText="Log In with Google"
                    onSuccess={context.signInUser}
                    onFailure={this.onSignInFailure}/>
                  <br></br>
                </div>
              </div>
            )}
          </AppContext.Consumer>
        )
    }
}

export default LoginComponent;
