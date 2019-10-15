import React, { useState, useEffect } from 'react'
import withAuth from "../axios/axios";
import FriendsForm from './FriendsForm'
import styled from 'styled-components';

const StyledFriends = styled.div`
    background-color: #6807f9;
    div {
        margin: 0.5em auto;
        color: #ffd739;

        span {
            margin: 1em 2em;
        }
    }
`

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
        <StyledFriends>
            <FriendsForm friends={friends} setFriends={setFriends} />
            <div>
                {friends.map(friend => <div>
                                            <span>Name: {friend.name}</span>
                                            <span>Age: {friend.age}</span>
                                            <span>Email: {friend.email}</span>
                                            <span>Height: {friend.height}</span>
                                            <span>Sport: {friend.sport}</span>
                                        </div>)}
            </div>
        </StyledFriends>
    )
}