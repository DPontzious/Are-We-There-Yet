import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,

    },
    grow: {
        flexGrow: 1,

    },
    menuButton: {
        marginLeft: -1,
        marginRight: 2,

    },


};
function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Toolbar>
                    <Button className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </Button>
                    <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about"
                        ? "nav-link active" : "nav-link"}>
                        <Button color="black">Home</Button>
                    </Link>
                    <Link to="/trip" className={window.location.pathname === "/trip" ? "nav-link active" : "nav-link"}>
                        <Button color="black">Trip</Button>
                    </Link>
                    <Link to="/gas" className={window.location.pathname === "/gas" ? "nav-link active" : "nav-link"}>
                        <Button color="black">Events</Button>
                    </Link>
                    <Link to="/register" className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                        <Button color="black">Sign in</Button>

                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

