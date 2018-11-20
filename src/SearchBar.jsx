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
      
    }

    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
                placeholder={this.props.placeholder}
                dataSource={this.props.dataSource}
                onUpdateInput={this.onUpdateInput}
                onNewRequest={this.onNewRequest}
            />
        </MuiThemeProvider>
    }
}

export default MaterialUIAutocomplete;
