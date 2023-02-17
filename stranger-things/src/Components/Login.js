import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [ showLoginButton, setShowLoginButton ] = useState(false)
    const [ username, setUserName ] = useState('')
    const [ password, setPassWord ] = useState('')
    const navigate = useNavigate();

    const handleLogIn = async(e) => {
        e.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
     },
            body: JSON.stringify({
                user: {
                username: username,
                password: password
      }
    })
            }).then(response => response.json())
                 .then(result => {
                     console.log(result);
                     window.localStorage.setItem('token', result.data.token)
                     props.setIsLoggedIn(true)
                     navigate('/profile')
            })
            .catch(console.error);

        
    }
    const handlePasswordChange = (e) => {
        setPassWord(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log('hi')
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            window.localStorage.setItem('token', result.data.token)
            navigate('/profile')
        })
        .catch(console.error);
    }

    return (
        <>
            {
                props.isLoggedIn ? <p>Yay! You're logged in!</p> : <p>Create a New Login</p>
            }
        <form>
            <input classname='login' type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)}></input><br></br>
            <input classname='login' type="password" placeholder='password' value={password} onChange={handlePasswordChange}></input><br></br>
            {
                showLoginButton ?
                <>
                <button onClick={handleLogIn}>Login</button>
                <button onClick={() => setShowLoginButton(false)}>Not Registered? Click Here!</button> 
                </> :
                <>
                <input classname='login' type="password" placeholder='confirm password'></input><br></br>
                <button onClick={handleClick}>Register</button><br></br>
                <button onClick={() => setShowLoginButton(true)}>Already Registered? Click Here!</button>
                </>
            }
        </form>
        </>
    )
}



export default Login
