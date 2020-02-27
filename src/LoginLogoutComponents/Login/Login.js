import React, { createRef } from 'react';
import classes from './Login.module.css';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    onSubmitClick = (e) => {
        e.preventDefault();
        // console.log(e.target.username.value);
        // console.log(e.target.password.value);
        // console.log(this.usernameRef.current.value);
        // console.log(this.passwordRef.current.value);

        const data ={
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
        }

        Axios.post('http://5dfb77b90301690014b8fbd7.mockapi.io/login',data)
        .then(response => {
            alert('Login Successful')
            this.props.onUserLoggedIn();
            this.props.history.push('/');
            // localStorage.setItem("IsUserLoggedIn", true);
        })
        .catch(error => {
            alert('Login Failed')
        });
    }
    render(){
        return(
            <div>
                <h3 className ={classes.txt}>Login</h3>
                {
                    this.props.LoggedInStatus ? <h3>User Logged In</h3> : 
                    <div>
                        <form onSubmit={this.onSubmitClick}>
                            <input ref={this.usernameRef} type="text" placeholder="Username" name="username"></input>
                            <input ref={this.passwordRef} type="password" placeholder="Password" name="password"></input>
                            <input type="submit" value="Login"></input>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Login;