import React, { Component } from 'react';
import './bulma.css';
import Header from './Header.jsx'
import LoginComponent from './LoginComponent.jsx'
import Notebook from './Notebook.jsx'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      schoolName : "" || "Unspecified School"
    }
  }
  render() {
    return (
      <div className="App">
        <Header schoolName={this.state.schoolName}></Header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/notebook" component={Notebook} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
