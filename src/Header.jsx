import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppProvider.jsx'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="hero">
                <div className="hero-body">
                  <nav className="navbar is-primary">
                    <h1 className="title">All Notes</h1>
                    <div className="navbar-start">
                      <Link to="/notebook"><a className="navbar-item">Notebook</a></Link>
                      <Link to="/account"><a className="navbar-item">Account</a></Link>
                      <Link to="/search"><a className="navbar-item">Search</a></Link>
                    </div>
                  </nav>
                </div>
            </header>
        )
    }
}

export default Header;
