import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class Search extends Component {
  render(){
    return(
      <div className="container">
          <SearchBar placeholder="Find some notes" dataSource={["CS4800", "CS2640", "CS3010", "CS3750"]}></SearchBar>
      </div>
    )
  }
}


export default Search;
