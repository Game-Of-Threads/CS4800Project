import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseName : ""
    }
    this.searchByCourseName = this.searchByCourseName.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  searchByCourseName(){
    fetch('http://localhost:5000/api/getNoteBySection?getColumn=acc_firstName&table=account&compColumn=acc_id&val=1', {
      method: 'POST',
      body : {
        sch_crs_sec_id : this.state.courseName
      }
    }).then((response) => {
      console.log(JSON.stringify(response));
    });
  }
  updateState(e) {
      e.preventDefault();
      this.setState({courseName : e.target.value})
  }
  render(){
    return(
      <div className="container">
          <input type="text" className="input" id="courseName" onChange={this.updateState}placeholder="Search by Course Name (e.g ENG1000)"/>
          <button className="button" onClick={this.searchByCourseName}>Search</button>
      </div>
    )
  }
}


export default Search;
