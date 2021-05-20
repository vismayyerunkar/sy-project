import './Header.css'
import React from 'react'
import Navitem from './Navitem.js'
import {
    // Switch,
    // Route,
    Link
} from "react-router-dom";

import LogoFile from '../Media/LogoFile.png';




function Header() {
    return (

        <div className='header'>

            <img className='logo' src={LogoFile} alt="Logo" />

            <Link className="link" to='/'><Navitem name='Home' /></Link>
            <Link className="link" to='/userGuide'><Navitem name='User Guide' /></Link>
            <Link className="link" to='/Parent'><Navitem name='Parent' /></Link>
            <Link className="link" to='/Contact'><Navitem name='Contact us' /></Link>
            <Link className="link" to='/About'><Navitem name='About us' /></Link>

            
        </div>
    )
}

export default Header



