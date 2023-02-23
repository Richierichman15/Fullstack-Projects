import React from 'react';
import { useState } from 'react'
import Search from './Search';

const Header = (props) => {
    const [ name, setName ] = useState();
    const [ breed, setBreed ] = useState();

  

    const postMatches = (post)  => {
        
        if (name) {
            const str = `/(${name})\w+/gi`
            const regexp = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regexpFilter = new RegExp(regexp);
            const hasMatched = regexpFilter.test(post.name)
            console.log('====================================');
            console.log(hasMatched);
            console.log('====================================');
            return hasMatched 
        }
        return true
    }

    return (
        <>
        <span>
        <h1>Name:</h1>
        <Search />
        <h1>Breed:</h1>
        <Search />
        </span>
        </>
    )
}

export default Header;