/**
 * Created by applect on 1/6/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Fab extends Component{
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render () {
        return <FloatingActionButton backgroundColor={this.props.backgroundColor} secondary={false}>
            <label htmlFor="">Add</label>
        </FloatingActionButton>
    }
}

Fab.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default connect()(Fab);