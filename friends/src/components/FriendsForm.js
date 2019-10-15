import React, { useRef } from 'react';
import withAuth from "../axios/axios";

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
        <form onSubmit={onSubmit}>
            <div>
                <label>name
                    <input type='text' ref={nameRef} name='name' />
                </label>
            </div>
            <div>
                <label>age
                    <input type='text' ref={ageRef} name='age' />
                </label>
            </div>
            <div>
                <label>email
                    <input type='email' ref={emailRef} name='email' />
                </label>
            </div>
            <div>
                <label>height
                    <input type='height' ref={heightRef} name='height' />
                </label>
            </div>
            <div>
                <label>sports
                    <input type='sports' ref={sportsRef} name='sports' />
                </label>
            </div>
            
            <button>Submit</button>
        </form>
)
}