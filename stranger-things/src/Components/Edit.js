import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Edit = (props) => {
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ deliver, setDeliver ] = useState(false);
    const navigate = useNavigate();

    const { state } = useLocation(); 
    const { post } = state
   
    const save = (e) => {
        
        const id = ''
        fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${id}`, {
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
                navigate('/posts')
            })
            .catch(console.error);
    }

    const handleDeliver = (e) => {
        setDeliver(e.target.checked)
    }

    

    return (
        <>
        <>
        { 
        props.isLoggedIn ?  
        <>
        <h1>Edit New Post</h1>
        <input className='posts' type='text' placeholder='Title' value={post.title} onChange={(e) => setTitle(e.target.value)}></input>
        <input className='posts' type='text' placeholder='Description' value={post.description} onChange={(e) => setDescription(e.target.value)}></input> 
        <input className='posts' type='text' placeholder='Price' value={post.price} onChange={(e) => setPrice(e.target.value)}></input>
        <input className='posts' type='text' placeholder='Location' value={post.location} onChange={(e) => setLocation(e.target.value)}></input>
        <input type="checkbox" id='deliver' checked={deliver} value={post.willDeliver} onChange={handleDeliver}></input>
        <label htmlFor='deliver'>Willing to deliver?</label><br></br>
        <button onClick={save}>Save</button>
        </>
        : null
        }
        </>
        </>
    )
}

export default Edit