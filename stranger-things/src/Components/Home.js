import React from 'react'

const Home = ( props ) => {
    return(
        <>
        
        {
            props.isLoggedIn ?
            <>
            <h1 id='home'>You need to Login First</h1>
            </> :
            <>
            <h1>Welcome to Stranger's Things!</h1><br></br>
            </>
             
            
        }
        </>
    )
}

export default Home