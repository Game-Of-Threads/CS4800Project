import React, { Component } from 'react';
import FileUploader from './FileUploader.jsx'
import { Markdown } from 'react-showdown';
import './github-markdown.css';


//Pages are where notes are taken and marked up
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.note.data,
            date: "",
            score: 1,
            author: this.props.username || "Anonymous",
            title: this.props.note.title || "Untitled Note",
            courseName: "" || "Unnamed Course",
            schoolName: "" || "Unnamed School",
            saved: true,
            note: this.props.note,
            AStimer: 0, //autosave timer, resets to 5000 after every change
        }
        // NOTE:
        //Every function must be bound to the component through these statements
        this.updateState = this.updateState.bind(this);
        this.save = this.save.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ note: nextProps.note });
    }
    updateState(e) {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
            saved: false,
            AStimer: 3000 //3 seconds of inactivity before autosaving
        })
    }
    autosave() {
        if (this.state.AStimer === 0) {
            this.save()
        }
    }
    save() {
        //saves the note, should autosave as development goes on
        this.setState({ data: document.getElementById("data").value });
        console.log("Note saved.");
    }
    addNote() {
        var axios = require("axios");
        axios.get('http://localhost:5000/api/createNote', {
            params: {
                rating: document.getElementById("rating").value,
                accId: document.getElementById("accid").value,
                noteText: document.getElementById("notetext").value,
                secID: document.getElementById("secid").value
            }
        }).then(function (response) {
            console.log("addNote successfully saved the notes");
            console.log(response);
        }).catch(function (error) {
            console.log("It didn't work");
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <p className="subtitle">{`${this.state.note.title} from ${this.state.courseName} at ${this.state.schoolName}`}</p>
                <p>Rating:</p>
                <input className="input" type="number" min="1" max="5" id="rating" /><br />
                <p>Account ID:</p>
                <input className="input" type="number" id="accid" min="1" /><br />
                <p>Section ID:</p>
                <input className="input" type="number" id="secid" min="1" /><br />
                <p>Body:</p>
                <div className="columns">
                    <div className="column">
                        <textarea className="textarea" rows="5" id="notetext"></textarea>
                        <button className="button has-text-centered" onClick={this.addNote}>Add Notes</button><br /><br />
                    </div>
                    <div className="column">
                        <FileUploader></FileUploader>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <textarea id="data" className="textarea" value={this.state.note.data} onChange={this.updateState}>
                        </textarea>
                        <br />
                        <button className="button" onClick={this.save}>Save</button>
                    </div>
                    <div className="column">
                        <span className="markdown-body">
                            <Markdown markup={this.state.note.data} />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;
