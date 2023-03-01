import React, {useState} from 'react';


const Search = ({setSearch}) => {
    

    return(
        <>
        <input type='search' onChange={(e) => setSearch(e.target.value)} placeholder='Searching...'></input>
        </>
    )
}

export default Search