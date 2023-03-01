import React from 'react';
import { useState } from 'react'
import Search from './Search';

const Header = ({setSearch}) => {

  

    return (
        <>
        <span>
        <h1>Search:</h1>
        <Search setSearch={setSearch}/>
        </span>
        </>
    )
}

export default Header;