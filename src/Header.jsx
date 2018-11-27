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
                  <nav className="navbar is-light">
                    <nav className="title is-2"><font color="#1E4D2B">Bronco Note</font></nav>
                    <div className="navbar-start">
                      <Link to="/notebook"><a className="navbar-item">Notebook</a></Link>
                      <Link to="/search">  <a className="navbar-item">Search  </a></Link>
                      <AppContext.Consumer>
                        {(context) => (
                          sessionStorage.getItem('userIsSignedIn') ? (
                            <Link to="/account"> <a className="navbar-item">Account </a></Link>
                        )
                          : null
                        )}
                      </AppContext.Consumer>
                      <AppContext.Consumer>
                        {(context) => (
                          sessionStorage.getItem('userIsSignedIn') ? (
                            <Link to="/"><a className="navbar-item" onClick={context.signOutUser}>Logout</a></Link>
                        )
                          : null
                        )}
                      </AppContext.Consumer>
                      <AppContext.Consumer>
                        {() => (
                          !sessionStorage.getItem('userIsSignedIn') ? (
                          <div>
                            <Link to="/"><nav className="navbar-item">Login</nav></Link>
                          </div>
                        )
                          : null
                        )}
                      </AppContext.Consumer>
                    </div>
                  </nav>
        )
    }
}

export default Header;
