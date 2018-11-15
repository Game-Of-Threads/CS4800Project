import React, { Component } from 'react';
import './bulma.css';
import HomePage from './HomePage.jsx'
import LandingPage from './LandingPage.jsx'
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
            <main className="container">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/notebook" component={Notebook} />
                    <Route path="/account" component={UserPreferences} />
                </Switch>
            </main>
        </div>
        );
    }
}

export default App;
