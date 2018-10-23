import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="hero">
                <div className="hero-body">
                    <h1 className="title">All Notes</h1>
                    <p className="subtitle">Alpha v0.1</p>
                </div>
            </header>
        )
    }
}

export default Header;
