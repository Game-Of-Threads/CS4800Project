import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx'
import AppContext from './AppProvider.jsx'

class UserPreferences extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="box">
          <h1 className="title">User Preferences</h1>
          <SearchBar></SearchBar>
          <AppContext.Consumer>{(context) => (
              <div>
              <h2><span className="has-text-weight-semibold">Name:</span> {context.name} </h2>
              <h2><span className="has-text-weight-semibold">School: </span> {context.schoolName} </h2>
              <h2><span className="has-text-weight-semibold">Major: </span>{context.major}  </h2>
              <h2><span className="has-text-weight-semibold">Reputation: </span> {context.reputation}</h2>
              </div>
          )}
        </AppContext.Consumer>
        </div>
    )
  }
}

export default UserPreferences;
