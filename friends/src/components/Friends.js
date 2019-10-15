import React, { useState, useEffect } from 'react'
import withAuth from "../axios/axios";
import FriendsForm from './FriendsForm'

export default function Friends () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <FriendsForm friends={friends} setFriends={setFriends} />
            <div>
                {friends.map(friend => <div>{friend.name}</div>)}
            </div>
        </div>
    )
}