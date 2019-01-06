import React, {Component} from 'react';
import Page from './Page.jsx'
import AppContext from './AppProvider.jsx'

class Notebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: 0,
    }

    this.changeActiveNote = this.changeActiveNote.bind(this);
    let currentComponent = this;
  }
  changeActiveNote(newNoteIndex) {
    this.setState({activeNote: newNoteIndex})
  }

  updateNoteTitle(){
    var index = this.state.activeNote;
  }

  render() {
    return (
      //NOTE: Wrapping entire elements in the AppContext.Consumer allows the context to be accessed incredibly easily without reinstancing the context
      <AppContext.Consumer>
        {(context) =>
          <div className = "columns">
              <div className = "column is-one-fifth">
                <NoteList noteArray={context.user.noteArray} changeActiveNote={this.changeActiveNote}> </NoteList>
              </div >
                <div className = "column"><Page note={context.user.noteArray[this.state.activeNote]} updateNoteName={this.updateNoteName}></Page>
              </div>
          </div>
      }
    </AppContext.Consumer>
    )
  }
}

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteCount : 0,
      noteArray : this.props.noteArray
    }
    this.changeNote = this.changeNote.bind(this);
    //this.addNote = this.addNote.bind(this);
  }
  changeNote(e) {
    this.props.changeActiveNote(parseInt(e.target.id), 10);
    console.log(this.state.noteArray);
  }

  componentWillReceiveProps(nextProps){
    this.setState({noteArray : nextProps.noteArray});
  }

  render() {
     var noteList = this.state.noteArray.map((object, index) => <div className = "panel-block"
                  id={index} key={index} data = {object.note_text || "Loading"}
                  onClick={this.changeNote}> {object.note_title || "Loading"}</div>)
     return (
        <AppContext.Consumer>
          {(context) => (
            <nav className="panel"> <div className="panel-heading">Notes</div>
            {noteList}
            <button className="button is-fullwidth is-light has-text-weight-semibold has-text-primary" onClick={context.addNote}> New Note</button>
            </nav>
          )}
        </AppContext.Consumer>
      )
    }
}
export default Notebook;
