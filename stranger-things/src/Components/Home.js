import React from 'react'

const Home = ( props ) => {
    return(
        <>
        <h1 id='home'>You need to Login first</h1>
        {
            props.isLoggedIn ?
            <>
            <h1>Welcome to Stranger's Things!</h1><br></br>
            <p>Logged in as {props.username}</p>
            </> :
            null
             
            
        }
        </>
    )
}

export default Home