import React from "react"
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <>
        <nav>
            <h1 className="header">Stranger Things</h1>
            <Link to='/' className="header">Home</Link>
            <Link to='/posts' className="header">Posts </Link>
            <Link to='/login' className="header" >Login/Register</Link>
            <Link to='/profile' className="header" >Profile</Link>
        </nav>
        </>
    )
}

export default Header