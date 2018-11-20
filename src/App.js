import React, { Component } from 'react';
import './bulma.css';
import Header from './Header.jsx'
import LoginComponent from './LoginComponent.jsx'
import Notebook from './Notebook.jsx'
import {Switch, Route} from 'react-router-dom'
import UserPreferences from './UserPreferences.jsx'
import AppContext from './AppProvider.jsx'
import Search from './Search.jsx'

class App extends Component {
  state = {
    user : {
      name : "Billy Bronco",
      schoolName : "Cal Poly Pomona",
      major: "Computer Science",
      reputation: 1937,
      noteArray: [
        {
          title: "Midterm Review",
          id: 0,
          data: "## Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in officia deserunt mollit anim id est laborum."
        }, {
          title: "djksahdfkjdlsf",
          id : 1,
          data: "Test 2"
        }, {
          title: "Im very stressed",
          id: 2,
          data: "Heh, nothing personell kid"
        }
        , {
          title : "Success",
          id: 3,
          data  : "It worked!"
        }
      ]
    },
    addNote : () => {
      var newArray = this.state.user.noteArray.concat({title: "New Note", data: "", id: this.state.user.noteArray.length+1});
      this.setState({
        user : {
          name : this.state.user.name,
          schoolName : this.state.user.schoolName,
          major : this.state.user.major,
          reputation : this.state.user.reputation,
          noteArray : newArray
        }
      })
    },

    saveNote : (note) => {
      var newArray = this.state.user.noteArray.map((item) => {
        if(item.id === note.id){
          return note;
        }
        else {
          return item;
        }
      })
      this.setState({user : {
        name : this.state.user.name,
        schoolName : this.state.user.schoolName,
        major : this.state.user.major,
        reputation : this.state.user.reputation,
        noteArray : newArray}
      })
    }

  }
  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
      <div className="App">
        <Header></Header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/notebook" component={Notebook} />
            <Route path="/account" component={UserPreferences} />
            <Route path="/search" component={Search} />
          </Switch>
        </main>
      </div>
    </AppContext.Provider>
    );
  }
}

export default App;
