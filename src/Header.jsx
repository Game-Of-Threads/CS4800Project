import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import AppContext from './AppProvider.jsx'
import AppLogo from './bronconote logo.png'
import SearchIcon from './search-icon.png'
import NoteBookIcon from './notebook-icon.png'
import UserIcon from './user-icon.png'
import LogoutIcon from './logout-icon.png'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                  <nav className="navbar has-shadow is-spaced is-light level">
                    <nav className="navbar-brand level-left"><figure className="image is-64x64"><img src={AppLogo} alt=""/></figure></nav>
                    <Link to="/"><nav className="title is-2" level-left><font color="#1E4D2B">Bronco Note</font></nav></Link>
                    <div className="navbar-start level-left">
                      <Link to="/notebook"><a className="navbar-item"><img src={NoteBookIcon} alt=""/>Notebook</a></Link>
                      <Link to="/search">  <a className="navbar-item"><img src={SearchIcon} alt=""/>Search  </a></Link>
                      <AppContext.Consumer>
                        {(context) => (
                          sessionStorage.getItem('userIsSignedIn') ? (
                            <Link to="/account"> <a className="navbar-item"><img src={UserIcon} alt=""/>Account </a></Link>
                        )
                          : null
                        )}
                      </AppContext.Consumer>
                      <AppContext.Consumer>
                        {(context) => (
                          sessionStorage.getItem('userIsSignedIn') ? (
                            <Link to="/"><a className="navbar-item" onClick={context.signOutUser}><img src={LogoutIcon} alt=""/>Logout</a></Link>
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
