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
            width: 128,
            height: 128,
            padding: 1,
            boxSizing: 'border-box'
        };

        const dropzoneStyle = {
            width: 128,
            height: 140,
            border: '2px dashed #555'
        }

        const { files } = this.state;

        const preview = files.map(file => (
            <div style={previewContainer}>
                <img src={file.preview} />
            </div>
        ));

        return (
            <div>
                <div className="dropzone has-text-centered">
                    <Dropzone
                        accept="image/*"
                        onDrop={this.onDrop.bind(this)}
                        style={dropzoneStyle}
                    > drop images here...
                    </Dropzone>
                </div>
                {preview}
            </div>
        );
    }
}

export default FileUploader;