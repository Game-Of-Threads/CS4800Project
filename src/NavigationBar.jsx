import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand"><font size="5">AllNotes</font></a>
                <Link to="/"><a className="navbar-item"> <font size="5">Landing Page
                        </font> </a> </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link"> <font size="5">Classes </font></a>
                    <div className="navbar-dropdown">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span>cs3010</span>
                                    <span className="icon is-small">
                                        <a className="fas fa-angle-down" aria-hidden="true"></a>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <Link to="/notebook"><a className="dropdown-item"> Section 1 </a> </Link>
                                    <Link to="/notebook"><a className="dropdown-item"> Section 2 </a> </Link>
                                    <Link to="/notebook"><a className="dropdown-item"> Section 3 </a> </Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/notebook"> <a className="navbar-item"> cs4080 </a> </Link>
                        <Link to="/notebook"> <a className="navbar-item"> cs4800 </a> </Link>
                    </div>
                </div>
                <a className="navbar-item"> <font size='5'>Section?</font> </a>
                <div className="navbar-end">
                    <Link to="/account"><a className="navbar-item"> <font size="5">Account
                            </font> </a> </Link>
                    <a className="navbar-item"><font size="4"> Help </font></a>
                    <a className="navbar-item"><font size="3"> About Us </font></a>
                </div>
            </nav>

        )
    }
}
export default NavigationBar;