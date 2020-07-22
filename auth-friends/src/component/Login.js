import React, {Component} from 'react';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
            }
    }

   HandleChange = e => {
       this.setState({
           credentials: {
               ...this.state.credentials,
               [e.target.name]: e.target.value
           }
       });
    }

    HandleLogin = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            this.setState({isLoading: true})
            window.localStorage.setItem('token', res.data.payload)
            this.setState({ isLoading: false })
            this.props.history.push('/friends-list')
        })
        .catch(err => {
            console.error('You are getting an error of',err); 
        })
    }

    render(){
    return (
        <div className='login-container'>
            <form className='login-form' noValidate autoComplete="off" onSubmit={this.HandleLogin}>
                <div className='input-form'>
                <TextField
                    required
                    id="outlined-required"
                    name='username'
                    label="Username"
                    value={this.state.credentials.username}
                    variant="outlined"
                    onChange={this.HandleChange}
                />
                </div>
                <div className='input-form'>
                <TextField
                    required
                    id="outlined-password-input"
                    name='password'
                    label="Password"
                    type="password"
                    value={this.state.credentials.password}
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={this.HandleChange}
                />
                </div>
                {this.isLoading ? (
                    <CircularProgress disableShrink />
                ) : (
                    <div className='login-btn'>
                    <Button  type = 'submit' variant = "contained" color = "primary">
                    Login
                    </Button>
                    </div>
                )}
            </form>
        </div>
    );
}
};

export default Login;