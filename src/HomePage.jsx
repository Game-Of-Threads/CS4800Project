import React, { Component } from 'react';
import Header from './Header.jsx';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    createSchool() {
        // if(school exists) go to school
        // else create school (for now)
        alert('school not found');
    }

    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div className="columns">
                    <div className="column">
                        <Header></Header>
                        <SearchBar></SearchBar>
                        <div className="button is-danger" onClick={this.createSchool}> create School </div>
                        <div>
                            <SearchBar></SearchBar>
                            <div className="button is-danger" onClick={this.createClass}> create Class </div>
                        </div>
                        <SearchBar></SearchBar>
                        <div className="button is-danger" onClick={this.createSection}> create Section </div>
                    </div>
                    <div className="column">
                        <div className="subtitle"><br /> <br /> My notes: </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;