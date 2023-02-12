import React, { useState, useEffect } from 'react'
import Search from './Search'
import { useNavigate } from "react-router-dom";
import NewPost from './NewPost';


const Post = () => {
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



const showNewPost = () => {
    navigate('/post/add')
}
const allPosts = posts.filter(postMatches).map((post, i) => {
    return(
    <li key={i} className='allposts'>
        <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <button>view</button>
    </div>
    </li>
    )
    
})

    return(
        <>
        <Search setText={setText} />
        <h1 onClick={showNewPost}>Add New Post</h1>
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