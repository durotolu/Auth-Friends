import React, { useRef } from 'react';
import withAuth from "../axios/axios";
import styled from 'styled-components';

const StyledFriendsForm = styled.div`
    background-color: #9852f9;

    button {
        background-color: #c299fc;
        border-radius: 2em;
        width: 7em;
        color: #6807f9;
    }

    div {
        margin: 0.5em auto;

        label {
            color: #ffd739;

            input {
                width: 20em;
            }
        }
    }
`

export default function FriendsForm (props) {

    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();
    const heightRef = useRef();
    const sportsRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        debugger
        withAuth().post('http://localhost:5000/api/friends', {
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
            height: heightRef.current.value,
            sports: sportsRef.current.value,
        })
        .then(res => {
            console.log(res)
            debugger
            props.setFriends(res.data)
            // localStorage.setItem('token', res.data.payload)
            // props.history.push('/friends')
        })
        .catch(err => {
            debugger
            // alert(err.message)
        })
        nameRef.current.value = ''
        ageRef.current.value = ''
        emailRef.current.value = ''
        heightRef.current.value = ''
        sportsRef.current.value = ''
    }

    return (
        <StyledFriendsForm>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name
                        <input type='text' ref={nameRef} name='name' />
                    </label>
                </div>
                <div>
                    <label>Age
                        <input type='text' ref={ageRef} name='age' />
                    </label>
                </div>
                <div>
                    <label>Email
                        <input type='email' ref={emailRef} name='email' />
                    </label>
                </div>
                <div>
                    <label>Height
                        <input type='height' ref={heightRef} name='height' />
                    </label>
                </div>
                <div>
                    <label>Sport
                        <input type='sports' ref={sportsRef} name='sports' />
                    </label>
                </div>
                
                <button>Add Friend</button>
            </form>
        </StyledFriendsForm>
)
}

