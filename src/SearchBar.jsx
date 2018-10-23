import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MaterialUIAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.state = {
            dataSource: ['cal poly pomona', 'everything else'],
            inputValue: ''
        }
    }

    onUpdateInput(inputValue) {
        document.getElement
    }

    onNewRequest() {
        alert('test');
    }

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
                placeholder='Find your school...'
                dataSource={this.state.dataSource}
                onUpdateInput={this.onUpdateInput}
                onNewRequest={this.onNewRequest}
            />
        </MuiThemeProvider>
    }
}

export default MaterialUIAutocomplete;
