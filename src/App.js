import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">All Notes</h1>
        </header>
        <Page></Page>
      </div>
    );
  }
}

//Pages are where notes are taken and marked up
class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : "",
      title : "" || "Untitled",
    }
    this.updateState = this.updateState.bind(this);
    this.save = this.save.bind(this);
  }
  updateState(e){
    e.preventDefault();
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  save(){
    //saves the note, should autosave as development goes on
    console.log("Note saved.");
  }
  render(){
    return(
      <div>
        <p>{`${this.state.title} from ${this.state.courseName} at ${this.state.schoolName}`}</p>
        <textarea name="" id="data" cols="80" rows="70" defaultValue={this.state.data} onChange={this.updateState}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default App;
