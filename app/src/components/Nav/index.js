import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Nav(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="black" className={classes.grow}>
                        Home
          </Typography>
                    <Typography variant="h6" color="black" className={classes.grow}>
                        Plan A Trip
          </Typography>
                    <Typography variant="h6" color="black" className={classes.grow}>
                        Gas Mileage
          </Typography>
                    <Button color="black">Sign in</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);