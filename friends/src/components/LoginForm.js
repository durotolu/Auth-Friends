import React, { useRef } from 'react';
import axios from 'axios';

export default function LoginForm(props) {
    //const [formInputValue, setFormInputValue] = useState('')
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        debugger
        axios.post('http://localhost:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })
        .then(res => {
            console.log(res)
            debugger
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends')
        })
        .catch(err => {
            alert(err.message)
        })
        usernameRef.current.value = ''
        passwordRef.current.value = ''
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Username
                <input type='text' ref={usernameRef} name='username' />
            </label>
            <label>Password
                <input type='text' ref={passwordRef} name='password' />
            </label>
            <button>Submit</button>
        </form>
    )
}