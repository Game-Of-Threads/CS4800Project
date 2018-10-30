import React, { Component } from 'react';
import './bulma.css';
import Header from './Header.jsx'
import LoginComponent from './LoginComponent.jsx'
import Notebook from './Notebook.jsx'
import {Switch, Route} from 'react-router-dom'
import UserPreferences from './UserPreferences.jsx'
import AppContext from './AppProvider.jsx'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/notebook" component={Notebook} />
            <Route path="/account" component={UserPreferences} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
