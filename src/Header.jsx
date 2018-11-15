import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppProvider.jsx'
function DisplaySchool(){
  return(
    <p><AppContext.Consumer>{(context) => context.schoolName}</AppContext.Consumer></p>
  )
}

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="hero">
                <div className="hero-body">
                    <Link to="/home"><h1 className="title" style={{color: 'blue'}}>All Notes</h1></Link>
                    <DisplaySchool></DisplaySchool>
                    <p className="subtitle">Alpha v0.18</p>
                    <Link to="/account"><button className="button is-primary">Account</button></Link>
                    <Link to="/notebook"><button className="button is-primary">Notebook</button></Link>
                </div>
            </header>
        )
    }
}

export default Header;
