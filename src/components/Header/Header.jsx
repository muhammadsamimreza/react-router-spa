import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1> This is our Header</h1>
            <nav style={{display: "flex", gap: "20px", justifyContent: "center",textDecoration: "none"}}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;