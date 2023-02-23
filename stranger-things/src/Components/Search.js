import React from 'react';


const Search = (props) => {
const  postMatches = (post, text) => {
    const regexp = `/(${text})\w+/gi`
    const regexpFilter = new RegExp(regexp);
    const hasMatched = regexpFilter.test(post.title)
    return hasMatched 
}


    return(
        <>
        <input type='search' onChange={(e) => props.setText(e.target.value)} placeholder='Searching...'></input>
        </>
    )
}

export default Search