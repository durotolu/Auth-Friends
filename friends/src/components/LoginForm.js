import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
    background-color: #c299fc;

    form {
        margin-top: 10em;
    }

    .logout {
        margin-left: 90em;
        margin-top: 1em;
    }

    button {
        background-color: #c299fc;
        border-radius: 2em;
        width: 7em;
        color: #6807f9;
    }

    label {
            color: #ffd739;

            input {
                width: 20em;
            }
        }
`

export default function LoginForm(props) {
    //const [formInputValue, setFormInputValue] = useState('')
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onLogout = () => {
        localStorage.removeItem('token');
        props.history.replace('/')
    }

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
        <StyledLoginForm>
            <button className='logout' onClick={onLogout} >Log Out</button>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username
                        <input type='text' ref={usernameRef} name='username' />
                    </label>
                </div>
                <div>
                    <label>Password
                        <input type='text' ref={passwordRef} name='password' />
                    </label>
                </div>
                <button>Log In</button>
            </form>
        </StyledLoginForm>
        
    )
}