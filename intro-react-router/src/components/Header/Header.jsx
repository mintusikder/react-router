import React from 'react';
import {  NavLink } from 'react-router';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav className='header'>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/mobile">Mobile</NavLink>
            </nav>
        </div>
    );
};

export default Header;