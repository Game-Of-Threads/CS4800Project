import React, { Component } from 'react';
import Header from './Header.jsx'
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
          <AppContext.Consumer>
            {(context) =>
              <div>
                <h2><span className="has-text-weight-semibold">Name: </span>{context.user.name}</h2>
                <h2><span className="has-text-weight-semibold">School: </span>{context.user.schoolName}</h2>
                <h2><span className="has-text-weight-semibold">Major: </span>{context.user.major}</h2>
                <h2><span className="has-text-weight-semibold">Reputation: </span>{context.user.reputation}</h2>
                <h2><span className="has-text-weight-semibold">email: </span>{context.user.email}</h2>
              </div>
            }
          </AppContext.Consumer>
        </div>
    )
  }
}

export default UserPreferences;
