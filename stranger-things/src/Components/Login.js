import React, { useState, useEffect } from 'react'


const Login = (props) => {
    const [ showLoginButton, setShowLoginButton ] = useState(false)
    const [ username, setUserName ] = useState('')
    const [ password, setPassWord ] = useState('')

    const logIn = async() => {
        window.localStorage.setItem('token', 'fdsafdsabf-dsaf')
        props.setIsLoggedIn(true)
    }

    // useEffect(() => {
    //     fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: {
    //             username: 'superman27',
    //             password: 'krypt0n0rbust'
    //             }
    //         })
    //         }).then(response => response.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    //         .catch(console.error);
    // }, [])
    const handlePasswordChange = (e) => {
        console.log(e)
        setPassWord(e.target.value)
    }

    return (
        <>
            {
                props.isLoggedIn ? <p>Yay! You're logged in!</p> : null
            }
        <form>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)}></input>
            <input type="text" placeholder='password' value={password} onChange={handlePasswordChange}></input>
            {
                showLoginButton ?
                <>
                <button onClick={logIn}>Login</button>
                <button onClick={() => setShowLoginButton(false)}>Not Registered? Click Here!</button> 
                </> :
                <>
                <input type="text" placeholder='confirm password'></input>
                <button>Register</button>
                <button onClick={() => setShowLoginButton(true)}>Already Registered? Click Here!</button>
                </>
            }
        </form>
        </>
    )
}



export default Login
