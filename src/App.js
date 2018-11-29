import React, { Component } from 'react';
import './bulma.css';
import HomePage from './HomePage.jsx'
import LandingPage from './LandingPage.jsx'
import LoginComponent from './LoginComponent.jsx'
import Header from './Header.jsx'
import Notebook from './Notebook.jsx'
import {Switch, Route} from 'react-router-dom'
import UserPreferences from './UserPreferences.jsx'
import AppContext from './AppProvider.jsx'
import Search from './Search.jsx'
import GoogleLogin from 'react-google-login';
import NavigationBar from './NavigationBar.jsx'
/*global gapi*/

class App extends Component {
  state = {
    userIsSignedIn : sessionStorage.getItem("userIsSignedIn") || false,
    user : {
      name : (sessionStorage.getItem("userData")) ? JSON.parse(sessionStorage.getItem("userData")).name : "Anonymous",
      schoolName : "Cal Poly Pomona",
      major: "Computer Science",
      reputation: 1000,
      email: (sessionStorage.getItem("userData")) ? JSON.parse(sessionStorage.getItem("userData")).email : "N/A",
      noteArray: [
        {
          note_title: " ",
          note_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          course_name : " ",
          note_text: " "
        }
      ]
    },

    signInUser : function(resp) {
      var auth2 = gapi.auth2.getAuthInstance();
      var profile = auth2.currentUser.get().getBasicProfile();
      sessionStorage.setItem("userIsSignedIn", true);
      this.setState({
        userIsSignedIn : sessionStorage.getItem("userIsSignedIn"),
        user : {
          name : profile.getName(),
          id : profile.getId(),
          email : profile.getEmail(),
          schoolName : this.state.user.schoolName,
          binder : this.state.user.binder,
          major : this.state.user.major,
          reputation : this.state.user.reputation,
          noteArray : this.state.user.noteArray
        }
      })
      let userData = null;
      if (resp.w3.U3) {
        userData = {
          name: resp.w3.ig,
          provider: 'google',
          email: resp.w3.U3,
          provider_id: resp.El,
          token: resp.Zi.access_token,
          provider_pic: resp.w3.Paa
        }
      }
      if (userData !== null) {
        sessionStorage.setItem("userData", JSON.stringify(userData));
      }
      console.log("Calling getSavedNotesFromUser....");
      //this.state.getSavedNotesFromUser();

      // adds the account's name & email to database
      fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/createAccount?getColumn=acc_firstname&table=account&compColumn=acc_id&val=1', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name : userData.name,
            email : userData.email
        })
      }).then((response) => {
        console.log(response);
        window.location.href = '/notebook';
      }).catch((error) => console.log(error));

    //   /* Does not work correctly */
    //   fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/getAllAccInfo?getColumn=acc_firstname&table=account&compColumn=acc_id&val=1')
    //   .then(function(response) {
    //     return response.json()
    //   }).then((response) => {
    //     console.log(response);
    //   }).catch((error) => console.log(error));

  }.bind(this),

    signOutUser : () => {
      sessionStorage.removeItem("userData");
      sessionStorage.removeItem("userIsSignedIn");
      let tempUser = this.state.user;
      tempUser.name = "Undefined"
      this.setState({userIsSignedIn: false, user: tempUser});
      this.state.user.noteArray = [
        {
          note_title: " ",
          note_id: 0,
          course_name : " ",
          note_text: " "
        }
      ]
    },

   addNote : () => {
      var note = { note_title: "New Note",
                   note_text: "",
                   note_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                   rating : 1,
                   secID : 1,
                   course_name : "",
                   name : this.state.user.name,
                   email : this.state.user.email }
        fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/createNote?note_id=idnoteRating=rating&noteTitle=title&noteText=data&secid=secID&accEmail=email', {
    	method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: "same-origin", // include, *same-origin, omit
        mode: "cors", // no-cors, cors, *same-origin
        body: JSON.stringify(note)
      }).then((response) => {
        console.log(response);
      });
      var newArray = this.state.user.noteArray.concat(note);
      this.setState({
        user : {
          name : this.state.user.name,
          schoolName : this.state.user.schoolName,
          email : this.state.user.email,
          major : this.state.user.major,
          reputation : this.state.user.reputation,
          noteArray : newArray
        },
      })
      console.log(this.state.user.noteArray);
    },

    addNoteToLibrary : (note) => {
      var formattedNote = {
                   note_title: note.note_title,
                   note_text: note.note_text,
                   note_id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                   rating : 1,
                   secID : 1,
                   course_name : note.course_name,
                   name : this.state.user.name,
                   email : this.state.user.email }
        var newArray = this.state.user.noteArray.concat(formattedNote);
        this.setState({
            user : {
            name : this.state.user.name,
            schoolName : this.state.user.schoolName,
            email : this.state.user.email,
            major : this.state.user.major,
            reputation : this.state.user.reputation,
            noteArray : newArray
            },
        })
        console.log(this.state.noteArray);
    },

    saveNote : (note) => {
      console.log(note);
      fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/saveNote?getColumn=acc_firstname&table=account&compColumn=acc_id&val=1', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          note_text : note.note_text,
          note_title : note.note_title,
          id : note.note_id,
          rating : 1,
          course_name : note.course_name.toUpperCase() || "Undefined"
        })
      }).then((response) => {
        console.log(response);
      });
      var newArray = this.state.user.noteArray.map((item) => {
        if(item.note_id === note.note_id){return note;}
        else {return item;}
      })
      this.setState({user : {
        name : this.state.user.name,
        email : this.state.user.email,
        schoolName : this.state.user.schoolName,
        major : this.state.user.major,
        reputation : this.state.user.reputation,
        noteArray : newArray}
      })
    },

    // gets all the notes from the database that the user has saved
    getSavedNotesFromUser: function(oldNoteArray) {
      const that = this;
      that.setState({
        user: {
          name: that.state.user.name,
          email: that.state.user.email,
          schoolName: that.state.user.schoolName,
          major: that.state.user.major,
          reputation: that.state.user.reputation,
          noteArray: [],
        }
      })
      var tempArray = [];
      fetch('http://ec2-13-56-253-7.us-west-1.compute.amazonaws.com:5000/api/getNoteByUser?accEmail=' + that.state.user.email)
      .then(function(response) {
        return response.json()
      }).then(function(result){
        for(var i=0; i < result.rows.length; i++){
            tempArray[i] = result.rows[i];
        }
        tempArray = tempArray;
        that.setState({
          user: {
            name: that.state.user.name,
            email: that.state.user.email,
            schoolName: that.state.user.schoolName,
            major: that.state.user.major,
            reputation: that.state.user.reputation,
            noteArray: tempArray
          }
        })
        console.log(that.state.user.noteArray);
        return result;
      }).then((response, result) => {
        console.log(result);
      }).catch((error) => console.log(error));

    }.bind(this)
  }

    // used to delete duplicates in array concatenation
    arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    return a;
    }

  constructor(props){
    super(props);
    // gets notes upon refresh
    if(this.state.userIsSignedIn){
        this.state.getSavedNotesFromUser(this.state.user.noteArray);
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
      <div className="App">
          <Header userIsSignedIn={this.state.userIsSignedIn}></Header>
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
