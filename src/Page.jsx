import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import SearchBar from './SearchBar.jsx'
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
            note : this.props.note,
            AStimer: 0, //autosave timer, resets to 5000 after every change
        }
        // NOTE:
        //Every function must be bound to the component through these statements
        this.updateState = this.updateState.bind(this);
        this.save = this.save.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ note: nextProps.note});
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
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <p className="subtitle">{`${this.state.note.title} from ${this.state.courseName} at ${this.state.schoolName}`}</p>
                <div class="columns">
                    <div class="column">
                        <textarea id="data" className="textarea" value={this.state.note.data} onChange={this.updateState}></textarea>
                        <br />
                        <button className="button" onClick={this.save}>Save</button>
                    </div>
                    <div class="column">
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
