import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import AppContext from './AppProvider.jsx'
import SearchIcon from './search-icon.png'
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  searchByCourseName(){
    fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/getNoteBySection?getColumn=acc_firstName&table=account&compColumn=acc_id&val=1', {
      method: 'POST',
      body : JSON.stringify({
        course_name : this.state.courseName.toUpperCase(),
        acc_name : this.state.acc_name.toUpperCase()
      }),
      headers: {'Content-Type':'application/json'}
    }).then((response) => {
      return response.json();
    }).then(function(data){
      console.log(data);
      this.setState({noteArray : data.body})
    }.bind(this));
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.courseName.length !== 0) {
      this.searchByCourseName();
    }
  }
  updateState(e) {
      e.preventDefault();
      this.setState({courseName : e.target.value, acc_name : e.target.value})
  }

  render(){
    var notes = this.state.noteArray.map((item, key) =>
    <AppContext.Consumer>
      {(context) => (
               <nav key={key} id={key} className="panel-block">
                 <div className="level-item">
                     <p className="has-text-left">
                       <span className="has-text-weight-bold level-item has-text-left">{(item.note_title.trim() || "Untitled Note")}</span>
                        {" by " + (item.acc_name.trim() || "Anonymous")}
                     </p>
                     <p>
                       <span className="has-text-weight-light has-text-grey">{item.note_text.substr(0,30)}...</span>
                     </p>
                 </div>
                 <div className="level-right">
                   <div className="level-item">
                       <button className="button is-primary is-outlined level-item" onClick={() => context.addNoteToLibrary(item)}>Add to Notebook</button>
                   </div>
                </div>
                </nav>
              )}
      </AppContext.Consumer>
    )

    return(

          <div className="container">
            <h1 className="title">Search</h1>
            <h2 className="subtitle">Search our entire archive of notes for your class</h2>
            <div className="columns">
              <div className="column-is-half">
                    <div className="level-item">
                      <p className="">
                        <input type="text" className="input" onKeyPress={this.handleKeyPress} id="courseName" onChange={this.updateState}placeholder="Search by Course Name (e.g ENG1000)"/>
                      </p>
                      <p className="">
                        <button className="button" disabled={this.state.courseName.length === 0} onClick={this.searchByCourseName}>Search</button>
                      </p>
                    </div>
              </div>
            </div>
              <div className="column is-two-thirds">
                <nav className="panel has-shadow">
                    {notes}
                </nav>
              </div>
          </div>
    )
  }
}

export default Search;
