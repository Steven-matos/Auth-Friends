import React, { Component } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

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
                Logged in!
            </div>
        );
    }
}

export default FriendsList;