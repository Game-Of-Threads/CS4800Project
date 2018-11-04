import React, {
  Component
} from 'react';
import Page from './Page.jsx'

class Notebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: 1,
      noteArray: [{
          title: "Midterm Review",
          data: "## Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in officia deserunt mollit anim id est laborum."
        },
        {
          title: "djksahdfkjdlsf",
          data: "Test 2"
        },
        {
          title: "Im very stressed",
          data: "Heh, nothing personell kid"
        },
      ]
    }
    this.changeActiveNote = this.changeActiveNote.bind(this);
    let currentComponent = this;
    fetch('http://ec2-18-223-32-101.us-east-2.compute.amazonaws.com:5000/api/name')
      .then(function(response) {
        return response.json()
      })
      .then((response) => {
        console.log(response);
      });



  }



  changeActiveNote(newNodeIndex) {
    this.setState({
      activeNote: newNodeIndex
    })

  }





  render() {
    return ( <
      div className = "columns" >
      <
      div className = "column is-one-fifth" >
      <
      NoteList noteArray = {
        this.state.noteArray
      }
      changeActiveNote = {
        this.changeActiveNote
      } > < /NoteList> < /
      div > <
      div className = "column" >
      <
      Page note = {
        this.state.noteArray[this.state.activeNote]
      } > < /Page> < /
      div > <
      /div>
    )
  }
}







class NoteList extends Component {
  constructor(props) {
    super(props);
    this.changeNote = this.changeNote.bind(this);
  }
  changeNote(e) {
    this.props.changeActiveNote(parseInt(e.target.id), 10);
  }
  render() {
    var i = 0;
    var noteList = this.props.noteArray.map((object) =>
      <
      div className = "panel-block"
      id = {
        i++
      }
      data = {
        object.data
      }
      onClick = {
        this.changeNote
      } > {
        object.title
      } < /div>
    )
    return ( <
        nav className = "panel" >
        <
        div className = "panel-heading" > Notes < /div> {
        noteList
      } <
      /nav>
  )
}
}



export default Notebook;
