import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            friend: {
            ...this.state.friend,     
            [e.target.name]: e.target.value
            }
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
            <div className='addfriend-container'>
                <form className='addfriend-form' noValidate autoComplete="off" onSubmit={this.HandleSubmit}>
                    <TextField id="filled-basic" name='name' value={this.state.friend.name} label="Name" variant="filled" onChange={this.HandleChange}/>
                    <TextField id="filled-basic" name='age' value={this.state.friend.age} label="Age" variant="filled" onChange={this.HandleChange}/>
                    <TextField id="filled-basic" name='email' value={this.state.friend.email} label="Email" type='email' variant="filled" onChange={this.HandleChange}/>
                    <div className='addfriend-submit'>
                        <Button  type='submit' variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddFriends;