import React, {Component} from 'react';
import Page from './Page.jsx'
import AppContext from './AppProvider.jsx'

class NoteBookSelection extends Component{
  constructor(props){
    super(props);
    this.state = {
      binder : this.props.binder || []
    }
  }
  render(){
    var binder = this.state.binder.map((object, index) => <div className = "box"
                 id={index} key={index}> {object.course_name}</div>)
    return(
      <AppContext.Consumer>
        {(context) => {
          <div className="box is-primary">

          </div>
        }}
      </AppContext.Consumer>
    )
  }
}

export default NoteBookSelection
