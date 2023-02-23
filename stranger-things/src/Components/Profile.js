import React, { useState, useEffect } from 'react'


const Profile = (props) => {
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        const getProfile = async() => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
                  
            }).then(response => response.json())

            console.log(response)
            setMessages(response.data.messages)
            console.log(messages);
        }
        getProfile()
    }, [])

 
    return(
        <>
        {
            props.isLoggedIn ?
            <>
            <h1>Message From me:</h1>
            
            </> :
            null
        }
         
        </>
    )
}

export default Profile