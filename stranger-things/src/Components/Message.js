import React, { useEffect } from 'react';

const Message = () => {

    useEffect(() => {
        const getMessage = () => {
            fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8929ddd439160017553e06/messages', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({
    message: {
      content: "Do you still have this?  Would you take $10 less?"
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
        }
        getMessage();
    }, [])

    return (
        <>
        
        </>
    )
}

export default Message