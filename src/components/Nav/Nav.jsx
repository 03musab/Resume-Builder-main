import React from 'react'
import './Nav.css'
import IMG1 from '../../assets/resumelogo.png'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <header className="navbar1">
            <img src={IMG1} alt="logo_img" className='logo_img1' />
            <div className="navbar_options">
                <ul className='navbar_menu'>
                    <li><Link to="/" className='btn' target="_blank" rel="noopener noreferrer">LOGIN</Link></li>
                    <li><Link to="/Signup" className='btn'target="_blank" rel="noopener noreferrer">SIGNUP</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav