import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Message = ( props ) => {
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ content, setContent ] = useState('')
    const navigate = useNavigate();

    const { state } = useLocation();
    const { id } = state

    const postMessage = async () => {
        try {
          const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content
              }
            })
          });
          const result = await response.json();
          console.log(result);
          navigate('/post')
          return result
        } catch (err) {
          console.error(err);
        }
      };

    return(
        <>
        { 
        props.isLoggedIn ?  
        <>
        <h1>Add New Post</h1>
        <input className='posts' type='text' placeholder='comment'  onChange={(e) => setContent(e.target.value)}></input>
        
        <button onClick={postMessage}>Create</button>
        </>
        : null
        }
        </>
    )

}



export default Message