import React, { useState, useEffect } from 'react'

const Profile = () => {
    const [ getProfile, setgetProfile] = useState([])

    useEffect(() => {
        const getProfile = async() => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer TOKEN_STRING_HERE'
                  }
            })

            console.log(response)
        }
        getProfile()
    }, [])
    return(
        <></>
    )
}

export default Profile