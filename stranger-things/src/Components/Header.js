import React from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from "./Home";
import Profile from "./Profile";



const Header = () => {
    return (
        <>
        <nav>
            <h1 className="header">Stranger Thing's</h1>
            <Link to='/' className="header">Home</Link>
            <Link to='/post' className="header">Post</Link>
            <Link to='/login' className="header" >Login/Register</Link>
            <Link to='/profile' className="header" >Profile</Link>
        </nav>
        </>
    )
}

export default Header