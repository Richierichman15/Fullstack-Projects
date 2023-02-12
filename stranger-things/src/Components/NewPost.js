import React from 'react'


const NewPost = () => {

    return(
        <>
        <h1>Add New Post</h1>
        <input type='text' placeholder='Title'></input>
        <input type='text' placeholder='Descrpition'></input>
        <input type='text' placeholder='Price'></input>
        <input type='text' placeholder='Location'></input>
        <input type="checkbox" id='deliver'></input>
        <label htmlFor='delever'>Willing to deliver?</label>
        <button>Create</button>
        </>
    )
}



export default NewPost