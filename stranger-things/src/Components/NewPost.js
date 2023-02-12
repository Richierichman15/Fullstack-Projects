import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const NewPost = () => {
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ deliver, setDeliver ] = useState(false);
    const navigate = useNavigate();


    const createPost = (e) => {
        // e.prevent.default()
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({
                post: {
                    title ,
                    description,
                    price,
                    location,
                    willDeliver: deliver
                }
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
                navigate('/post')
            })
            .catch(console.error);
    }

    const handleDeliver = (e) => {
        setDeliver(e.target.checked)
    }


    return(
        <>
        <h1>Add New Post</h1>
        <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}></input>
        <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)}></input> 
        <input type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)}></input>
        <input type='text' placeholder='Location' onChange={(e) => setLocation(e.target.value)}></input>
        <input type="checkbox" id='deliver' checked={deliver} onChange={handleDeliver}></input>
        <label htmlFor='deliver'>Willing to deliver?</label>
        <button onClick={createPost}>Create</button>
        </>
    )
}



export default NewPost