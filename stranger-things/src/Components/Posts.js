import React, { useState, useEffect } from 'react'
import Search from './Search'
import { useNavigate } from "react-router-dom";


const Post = ( props ) => {
    
    const [ token, setToken ] = useState(window.localStorage.getItem('token'))
    const [ posts, setPosts ] = useState([])
    const [filteredPosts, setFilterPosts] = useState([])
    const [ text, setText ] = useState('')

    const  navigate = useNavigate()

    
    function postMatches(post) {
        
        if (text) {
            const str = `/(${text})\w+/gi`
            const regexp = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regexpFilter = new RegExp(regexp);
            const hasMatched = regexpFilter.test(post.title)
            console.log('====================================');
            console.log(hasMatched);
            console.log('====================================');
            return hasMatched 
        }
        return true
    }

useEffect(() => {
    const getPost = () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts')
            .then(response => response.json())
            .then(result => {
                setPosts(result.data.posts);
                console.log(result);
            })
            .catch(console.error);
        }
        getPost();
       

}, [])


const getDelete = async(id) => {
    console.log('====================================');
    console.log('here');
    console.log('====================================');
    fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${id}`, {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
        }).then(response => response.json())
        .then(result => {
            
            console.log(result);
            const newPosts = posts.filter(post => post._id !== id)
            setPosts(newPosts)
            
        })
        .catch(console.error);
        }
   



const showNewPost = () => {
    navigate('/post/add')
}

const showComments = (_id) => {
    navigate(`/post/view/${_id}`, {
        id: _id
    }) 
};

const showEdit = (post) => {
    navigate(`/post/edit`, {
        state: { post }
    })
}

const showMessage = (_id) => {
    navigate(`/post/message`, {
        state: { _id }
    })
}

const allPosts = posts.filter(postMatches).map((post, i) => {
    return(
    <li key={i} className='allposts'>
        <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <button onClick={() => showComments(post._id)}>view comments</button>
        <button id='message' onClick={() => showMessage(post._id)} >Messeage the Author</button>
        <button id='delete' onClick={() => getDelete(post._id)}>Delete</button>
        <button onClick={() => showEdit(post)}>Edit</button>
    </div>
    </li>
    )
    
})

    return(
        <>
        {
           props.isLoggedIn ?  <>
            <h1>Welcome to Stranger's Things!</h1>
            <button id='newpost' onClick={showNewPost}>Add New Post</button>
           </>  : null 
        }
        <Search setText={setText} />
        {
            posts ?
            <ul >{allPosts}</ul>
            :
            null
        }
        
        </>
    )
}

export default Post