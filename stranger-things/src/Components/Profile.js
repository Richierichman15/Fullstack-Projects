import React, { useState, useEffect } from 'react'
import Login from './Login'

const Profile = (props) => {
    const [ getProfile, setgetProfile] = useState([])
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))

    useEffect(() => {
        const getProfile = async() => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
                  
            }).then(response => response.json())

            console.log(response)
        }
        getProfile()
    }, [])

    const handleChange = (event) => {
        setgetProfile(event.target.value)
    }
    return(
        <>
        {
            props.isLoggedIn ?
            <>
            </> :
            null
        }
        </>
    )
}

export default Profile