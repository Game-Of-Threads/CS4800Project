import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import './github-markdown.css';
import AppContext from './AppProvider.jsx'

//Pages are where notes are taken and marked up
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: this.props.username || "Anonymous",
            note_title: this.props.note.note_title || "Untitled Note",
            schoolName: "" || "Unnamed School",
            saved: true,
            note : this.props.note,
            AStimer: null, //autosave timer, resets to 5000 after every change
        }
        // NOTE:
        //Every function must be bound to the component through these statements
        this.updateState = this.updateState.bind(this);
        this.updateCourseName = this.updateCourseName.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.updateNoteTitle = this.updateNoteTitle.bind(this);
        this.updateNoteText = this.updateNoteText.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ note: nextProps.note});
    }
    updateState(e) {
        e.preventDefault();
        this.setState({
            note : {
              note_title : this.state.note.note_title,
              note_text : this.state.note.note_text,
              [e.target.id]: e.target.value,
              score : this.state.note.score,
              note_id : this.state.note.note_id,
              course_name : this.state.note.course_name
            },
        })
    }

    updateNoteText(e){
      e.preventDefault();
      this.setState({
        note : {
          note_title : this.state.note.note_title,
          note_text : e.target.value,
          score : this.state.note.score,
          note_id : this.state.note.note_id,
          course_name : this.state.note.course_name
        }
      })
    }

    updateCourseName(e){
      e.preventDefault();
      this.setState({
        note : {
          note_title : this.state.note.note_title,
          note_text : this.state.note.note_text,
          score : this.state.note.score,
          note_id : this.state.note.note_id,
          course_name : e.target.value
        },
      })
    }
    updateNoteTitle(e){
      e.preventDefault();
      this.setState({
        note : {
          note_title : e.target.value,
          note_text : this.state.note.note_text,
          score : this.state.note.score,
          note_id : this.state.note.note_id,
          course_name : this.state.note.course_name
        }
      })
    }
    render() {
        return (
          <AppContext.Consumer>
            {(context) => (
              <div>
                  <p className="subtitle"><input type="text" className="input" onChange={this.updateNoteTitle} placeholder={this.state.note.note_title}/> {`from ${context.user.name} at ${context.user.schoolName}`}</p>
                  <input type="text" onChange={this.updateCourseName} value={this.state.note.course_name} placeholder="Class name" className="input"/>
                  <div className="columns">
                      <div className="column">
                          <textarea id="data" className="textarea" value={this.state.note.note_text} rows="20" onChange={this.updateNoteText}></textarea>
                          <br />
                          <button className="button is-success" onClick={() => {console.log(this.state.note); context.saveNote(this.state.note)} }>Save</button>
                      </div>
                      <div className="column">
                          <span className="markdown-body">
                              <Markdown markup={this.state.note.note_text} />
                          </span>
                      </div>
                  </div>
              </div>
            )}
          </AppContext.Consumer>
        )
    }
}

export default Page;
