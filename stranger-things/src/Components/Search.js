import React, { useState} from 'react';


const Search = (props) => {
const [ searchTerm, setSearchTerm ] = useState("")
function postMatches(post, text) {
    const regexp = `/(${text})\w+/gi`
    const regexpFilter = new RegExp(regexp);
    const hasMatched = regexpFilter.test(post.title)
    return hasMatched 
}
// if(props.posts && searchTerm) {

//     const filteredPosts = props.posts.filter(post => postMatches(post, searchTerm));
//     props.setFilterPosts(filteredPosts)
// }

    return(
        <>
        <input type='search' onChange={(e) => props.setText(e.target.value)} placeholder='Searching...'></input>
        </>
    )
}

export default Search