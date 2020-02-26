import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriends extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    HandleChange = e => {
        this.setState({
            ...this.state.friend,     
            [e.target.name]: e.target.value
        })
    }

    HandleSubmit = e => {
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this.HandleSubmit}>
                <TextField id="filled-basic" name='name' label="Name" variant="filled" onChange={this.HandleChange}/>
                <TextField id="filled-basic" name='age' label="Age" variant="filled" onChange={this.HandleChange}/>
                <TextField id="filled-basic" name='email' label="Email" type='email' variant="filled" onChange={this.HandleChange}/>
            </form>
        );
    }
}

export default AddFriends;