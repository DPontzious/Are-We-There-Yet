import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justify: 'center'
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,

//     },
//     dense: {
//         marginTop: 16,
//     },
//     menu: {
//         width: 200,
//     },


// });

// class FilledTextFields extends React.Component {
//     state = {
//         start: '',
//         destination: ""
//     };

//     handleChange = name => event => {
//         this.setState({
//             [name]: event.target.value,
//         });
//     };

//     render() {
//         const { classes } = this.props;

//         return (
//             // <div className={classes.container} noValidate autoComplete="off">
//             <main>
//                 <row>
//                     <row>
//                         <TextField
//                             id="filled-start"
//                             label="Start"
//                             className={classes.textField}
//                             value={this.state.start}
//                             onChange={this.handleChange('start')}
//                             margin="normal"
//                             variant="filled"
//                         />
//                     </row>

//                 </row>
//                 <row>
//                     <TextField
//                         id="filled-destination"
//                         label="Destination"
//                         className={classes.textField}
//                         value={this.state.destination}
//                         onChange={this.handleChange('destination')}
//                         margin="normal"
//                         variant="filled"
//                     />
//                 </row>
//                 <row>
//                     <button onClick={(e) => this.props.clickSearch(e, this.state.start, this.state.destination)}>Search by Destination</button>
//                 </row>

//             </main>
import { Form, FormGroup, Input } from 'reactstrap';
import "./style.css";

function input(props) {
    return (
        <Form>
            <FormGroup>
                <Input
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder} />
            </FormGroup>
        </Form>
    );
}

export default input;