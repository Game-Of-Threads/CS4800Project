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
            title: this.props.note.title || "Untitled Note",
            schoolName: "" || "Unnamed School",
            saved: true,
            note : this.props.note,
            AStimer: 0, //autosave timer, resets to 5000 after every change
        }
        // NOTE:
        //Every function must be bound to the component through these statements
        this.updateState = this.updateState.bind(this);
        this.updateCourseName = this.updateCourseName.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ note: nextProps.note});
    }
    updateState(e) {
        e.preventDefault();
        this.setState({
            note : {
              title : this.state.note.title,
              data : this.state.note.data,
              [e.target.id]: e.target.value,
              score : this.state.note.score,
              id : this.state.note.id,
              courseName : this.state.note.courseName
            },
        })
    }

    updateCourseName(e){
      e.preventDefault();
      this.setState({
        note : {
          title : this.state.note.title,
          data : this.state.note.data,
          score : this.state.note.score,
          id : this.state.note.id,
          courseName : e.target.value
        }
      })
    }
    render() {
        return (
          <AppContext.Consumer>
            {(context) => (
              <div>
                  <p className="subtitle"><input type="text" className="input" onChange={this.updateState} placeholder={this.state.note.title}/> {`from ${context.user.name} at ${context.user.schoolName}`}</p>
                  <input type="text" onChange={this.updateCourseName} value={this.state.note.courseName} className="input"/>
                  <div className="columns">
                      <div className="column">
                          <textarea id="data" className="textarea" value={this.state.note.data} rows="20" onChange={this.updateState}></textarea>
                          <br />
                          <button className="button" onClick={() => context.saveNote(this.state.note)}>Save</button>
                      </div>
                      <div className="column">
                          <span className="markdown-body">
                              <Markdown markup={this.state.note.data} />
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
