import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class FilledText extends React.Component {
    state = {
        make: '',
        model: "",
        year: "",
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="filled-make"
                    label="Make"
                    className={classes.textField}
                    value={this.state.make}
                    onChange={this.handleChange('make')}
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="filled-model"
                    label="Model"
                    className={classes.textField}
                    value={this.state.model}
                    onChange={this.handleChange('model')}
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="filled-year"
                    label="Year"
                    className={classes.textField}
                    value={this.state.year}
                    onChange={this.handleChange('year')}
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="filled-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                />

            </form>
        );
    }
}

FilledText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledText);
