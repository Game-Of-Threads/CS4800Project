import React, { Component } from 'react';

class LoginComponent extends Component {
  // FIXME: The text from the message property does not show up on this page.
  constructor(props){
    super(props);
    this.state = {
      message : "Hello", // Multi-purpose message to be displayed to the user, blank by default
      messageStatus : "black", //color of the message
                              // NOTE: "success" for green "warning" for yellow "danger" for red
      username : "",
      password : ""
    }
    this.updateState = this.updateState.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  updateState(e){
    //Updates the state of the component on every change.
    //Incredibly useful, should just copy/paste into most components
    e.preventDefault();
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  attemptLogin(e){
    e.preventDefault();
    this.setState({message : "Login Successful!",
                   messageStatus : this.state.username})
  }

  render(){
    return(
      <div className="box has-background-light">
        <input type="text" className="input" id="username" onChange={this.updateState}/>
        <input type="password" className="input" id="password" onChange={this.updateState}/>
        <p className={`has-text-${this.state.messageStatus}`}>{this.state.messsage} Hello</p>
        <button className="button is-primary" onClick={this.attemptLogin}>Login</button>
      </div>
    )
  }
}

export default LoginComponent;
