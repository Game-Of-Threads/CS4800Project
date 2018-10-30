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
            <h2><span className="has-text-weight-semibold">Name:</span>
              <AppContext.Consumer>{(context) => context.name}</AppContext.Consumer>
            </h2>
            <h2><span className="has-text-weight-semibold">School: </span>
                <AppContext.Consumer>{(context) => context.schoolName}</AppContext.Consumer>
            </h2>
            <h2><span className="has-text-weight-semibold">Major: </span>
                <AppContext.Consumer>{(context) => context.major}</AppContext.Consumer>
            </h2>
            <h2><span className="has-text-weight-semibold">Reputation: </span>
                <AppContext.Consumer>{(context) => context.reputation}</AppContext.Consumer>
            </h2>
        </div>
    )
  }
}

export default UserPreferences;
