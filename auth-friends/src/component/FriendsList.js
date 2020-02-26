import React, { Component } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriends from './AddFriends';
import Paper from '@material-ui/core/Paper';


class FriendsList extends Component {
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log('Friends list data',res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.error('friends list error of',err.response); 
        })
    }

    render() {
        return (
            <div>
                <AddFriends />
                <div className='friend-list-container'>
                    {this.state.friends.map(friend => 
                        <Paper elevation={3} className='friends' >
                            <h2>Name: {friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </Paper>
                    )}
                </div>
            </div>
        );
    }
}

export default FriendsList;