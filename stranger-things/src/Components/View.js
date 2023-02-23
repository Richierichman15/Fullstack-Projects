import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const View = () => {
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ messages, setMessages ] = useState({})
   
    let { id } = useParams()

    useEffect(() => {
    console.log(id)
        const getMessage = () => {                   
            fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${id}/messages`, {
              method: "POST",
             headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: {
      content: "Do you still have this?  Would you take $10 less?"
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    setMessages(result.data.message)
    
  })
  .catch(console.error);
        }
        getMessage();
      }, [])

    return (
        <>
        <h1>{messages.content}</h1>
        </>
    )
}

export default View