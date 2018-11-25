import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import AppContext from './AppProvider.jsx'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                  <nav className="navbar">
                    <nav className="title is-2">Bronco Note</nav>
                    <div className="navbar-start">
                      <Link to="/notebook"><a className="navbar-item">Notebook</a></Link>
                      <Link to="/search">  <a className="navbar-item">Search  </a></Link>
                      <AppContext.Consumer>
                        {(context) => (
                          sessionStorage.getItem('userIsSignedIn') ? (
                          <div>
                            <Link to="/account"> <a className="navbar-item">Account </a></Link>
                            <Link to="/"><nav className="navbar-item" onClick={context.signOutUser}>Logout</nav></Link>
                          </div>
                        )
                          : undefined
                        )}
                      </AppContext.Consumer>
                      <AppContext.Consumer>
                        {() => (
                          !sessionStorage.getItem('userIsSignedIn') ? (
                          <div>
                            <Link to="/"><nav className="navbar-item">Login</nav></Link>
                          </div>
                        )
                          : undefined
                        )}
                      </AppContext.Consumer>
                    </div>
                  </nav>
        )
    }
}

export default Header;
