import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <Link to='/'>
                sign in
            </Link>
            <Link to='/signup'>
                sign up
            </Link>
        </nav>
    )
}

export default Navbar;