import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Topbar.module.css';

const TopBar = (props) => {
    console.log(props);
    return(
        <div className={classes.TopbarStyling}>
            <Link className={classes.links} to="/">Home</Link>
            <Link className={classes.links} to="/Contact">Contact</Link>
            <Link className={classes.links} to="/About">About</Link>
            {
                props.LoggedInStatus ? <Link onClick={props.onUserLoggedOut} className={classes.links} to="/Login">Logout</Link> : <Link className={classes.links} to="/Login">Login</Link>
            }
        </div>
    )
}

export default TopBar;