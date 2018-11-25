import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import AppContext from './AppProvider.jsx'
/*global context*/


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
        course_name : this.state.courseName.toUpperCase()
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
              <nav href="" key={key} id={key} className="panel-block">
                <span className="is-bold">{item.note_title || "Untitled Note"}</span> : {item.note_text.substring(0 , 20)}...
                  <button className="button" onClick={() => context.addNoteToLibarary(item)}> Add to Library</button>
                </nav>
    })
    return(
      <AppContext.Consumer>
        {(context) => (
          <div className="container">
              <input type="text" className="input" id="courseName" onChange={this.updateState}placeholder="Search by Course Name (e.g ENG1000)"/>
              <button className="button" onClick={this.searchByCourseName}>Search</button>
              <nav className="panel">
                {notes}
              </nav>
          </div>
        )}
        </AppContext.Consumer>
    )
  }
}


export default Search;
