import React, { Component } from 'react';
import './bulma.css';
import LoginComponent from './LoginComponent.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">All Notes</h1>
        </header>
        <LoginComponent></LoginComponent>
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
      courseName : "" || "Unnamed Course",
      schoolName : "" || "Unnamed School"
    }
    // NOTE:
    //Every function must be bound to the component through these statements
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
      <div className="box">
        <p className="subtitle">{`${this.state.title} from ${this.state.courseName} at ${this.state.schoolName}`}</p>
        <textarea name="" id="data" cols="80" rows="70" defaultValue={this.state.data} onChange={this.updateState}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default App;
