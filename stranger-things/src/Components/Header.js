import React from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from "./Home";
import Profile from "./Profile";



const Header = () => {
    return (
        <>
        <nav>
            <h1>Stranger Thing's</h1>
            <Link to='/'>Home</Link>
            <Link to='/post'>Post</Link>
            <Link to='/login'>Login/Register</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
        </>
    )
}

export default Header