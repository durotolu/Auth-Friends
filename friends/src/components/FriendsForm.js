import React, { useRef } from 'react';
import withAuth from "../axios/axios";

export default function FriendsForm (props) {

    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        debugger
        withAuth().post('http://localhost:5000/api/friends', {
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
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
    }

    return (
        <form onSubmit={onSubmit}>
            <label>name
                <input type='text' ref={nameRef} name='name' />
            </label>
            <label>age
                <input type='text' ref={ageRef} name='age' />
            </label>
            <label>email
                <input type='email' ref={emailRef} name='email' />
            </label>
            <button>Submit</button>
        </form>
)
}