import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import './github-markdown.css';
//Pages are where notes are taken and marked up
class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : "",
      date: "",
      score : 1,
      author: this.props.username || "Anonymous",
      title : "" || "Untitled Note",
      courseName : "" || "Unnamed Course",
      schoolName : "" || "Unnamed School",
      saved : true,
      AStimer : 0, //autosave timer, resets to 5000 after every change
    }
    // NOTE:
    //Every function must be bound to the component through these statements
    this.updateState = this.updateState.bind(this);
    this.save = this.save.bind(this);
  }

  updateState(e){
    e.preventDefault();
    this.setState({
      [e.target.id] : e.target.value,
      saved : false,
      AStimer : 3000 //3 seconds of inactivity before autosaving
    })
  }

  autosave(){
    if(this.state.AStimer === 0){
      this.save()
    }
  }
  save(){
    //saves the note, should autosave as development goes on
    this.setState({data: document.getElementById("data").value});
    console.log("Note saved.");
  }
  render(){
    return(
      <div>
        <p className="subtitle">{`${this.state.title} from ${this.state.courseName} at ${this.state.schoolName}`}</p>
        <div className="markdown-body">
          <Markdown markup={this.state.data} />
        </div>
        <textarea id="data" className="textarea" defaultValue={this.state.data} onChange={this.updateState}></textarea>
        <button className="button" onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default Page;
