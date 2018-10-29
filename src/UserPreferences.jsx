import React, { Component } from 'react';

class UserPreferences extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : {
        name : "",
        school : "",
        major : "",
        reputationScore : 0;
      }
    }
  }
  render(){
    return(
      <div className="">
        <h1>User Preferences</h1>
        <h2>Name: {this.state.user.name}</h2>
        <h2>School: {this.state.user.university}</h2>
        <h2>Major: {this.state.user.major}</h2>
        <h2>Reputation: {this.state.user.reputationScore}</h2>
        <h2></h2>
        <h2></h2>
      </div>
    )
  }
}
