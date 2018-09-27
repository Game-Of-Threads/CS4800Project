import React, { Component } from 'react';
import Page from './Page.jsx'

class Notebook extends Component {
  render(){
    return(
      <div className="columns">
        <div className="column is-one-fifth">
          <NoteList></NoteList>
        </div>
        <div className="column">
          <Page></Page>
        </div>
      </div>
    )
  }
}

class NoteList extends Component {
  render(){
    return(
      <nav className="panel">
        <div className="panel-heading">Notes</div>
        <div className="panel-block">
          <div className="control">Hello</div>
        </div>
        <a href="" className="panel-block">Sept 26 2018</a>
        <a href="" className="panel-block">Sept 24 2018</a>
        <a href="" className="panel-block">Sept 22 2018</a>
        <a href="" className="panel-block">Sept 26 2018</a>
        <a href="" className="panel-block">Sept 26 2018</a>
        <a href="" className="panel-block">Sept 26 2018</a>
        <a href="" className="panel-block">Sept 26 2018</a>
        <a href="" className="panel-block">Sept 26 2018</a>
      </nav>
    )
  }
}


export default Notebook;
