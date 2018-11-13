import React, { Component } from 'react';
import Dropzone from "react-dropzone";

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    onDrop(files) {
        this.setState({
            // concatenates the files and the mapped previews
            files: this.state.files.concat(
                files.map(file => ({
                    file,
                    preview: URL.createObjectURL(file)
                }))
            )
        });
    }

    render() {
        const previewContainer = {
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderRadius: 2,
            border: '1px solid #eaeaea',
            marginBottom: 8,
            marginRight: 4,
            width: 200,
            height: 200,
            padding: 4,
            boxSizing: 'border-box'
        };

        const { files } = this.state;

        const preview = files.map(file => (
            <div style={previewContainer}>
                <img
                    src={file.preview}
                />
            </div>
        ));

        return (
            <section>
                <div className="columns">
                    <div className="column">
                        <div className="dropzone">
                            <Dropzone
                                accept="image/*"
                                onDrop={this.onDrop.bind(this)}
                            > drop images here...
                            </Dropzone>
                        </div>
                    </div>
                    <div className="column">
                        {preview}
                    </div>
                </div>
            </section>
        );
    }
}

export default FileUploader;