import React, { useState, useEffect } from 'react';

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

function postMatches(post, text) {

}

const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return(
        <>
        </>
    )
}

export default Search