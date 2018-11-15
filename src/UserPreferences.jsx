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
        <div>
            <Header></Header>
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
        </div>
    )
  }
}

export default UserPreferences;
