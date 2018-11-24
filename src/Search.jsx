import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseName : "",
      noteArray : []
    }
    this.searchByCourseName = this.searchByCourseName.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  searchByCourseName(){
    fetch('http://localhost:5000/api/getNoteBySection?getColumn=acc_firstName&table=account&compColumn=acc_id&val=1', {
      method: 'POST',
      body : JSON.stringify({
        sch_crs_sec_id : this.state.courseName
      }),
      headers: {'Content-Type':'application/json'}
    }).then((response) => {
      return response.json();
    }).then(function(data){
      console.log(data);
      this.setState({noteArray : data.body})
    }.bind(this));
  }
  updateState(e) {
      e.preventDefault();
      this.setState({courseName : e.target.value})
  }
  render(){
    var notes = this.state.noteArray.map(function(item, key) {
      return <nav href="" key={key} id={key} className="panel-block">{item.note_title || "Untitled Note"} : {item.note_text.substring(0 , 20)}...</nav>
    })
    return(
      <div className="container">
          <input type="text" className="input" id="courseName" onChange={this.updateState}placeholder="Search by Course Name (e.g ENG1000)"/>
          <button className="button" onClick={this.searchByCourseName}>Search</button>
          <nav className="panel">
            {notes}
          </nav>
      </div>
    )
  }
}


export default Search;
