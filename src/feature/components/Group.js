/**
 * Created by charan on 28/5/17.
 */

import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
//import {visibilitySDRow} from '$PATIENT/selectors/SpecialDosageSelectors';
//import {RemoveSpecialDosageRow} from '$PATIENT/actions/SpecialDosage';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';



class SpecialDosageRow extends Component{
    constructor(props) {
        super(props);
        this.state={
            rowVisible: props.rowVisible
        }
    }
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    _toggleSpecialDosage() {
        const {toggleSpecialDosage} = this.props;
        toggleSpecialDosage();
    }
    render(){
            return (
                <div>
                    <TextField hintText="No"/>
                    <TextField hintText="Number"/>
                    <TextField hintText="of"/>
                </div>
            );
    }
}

// http://redux.js.org/docs/recipes/ComputingDerivedData.html.
// Sharing Selectors Across Multiple Components
const mapStateToProps = (state, props) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

SpecialDosageRow.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default connect(mapStateToProps,mapDispatchToProps)(SpecialDosageRow);

