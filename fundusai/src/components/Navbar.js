import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "../images/logo.png";
import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' spy={true} smooth={true} offset={50}duration={500} className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#FF9839' }} />)
                        : (<FaBars size={30} style={{ color: '#125fbf' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-100}duration={1000} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='service' spy={true} smooth={true} offset={-100}duration={1000} onClick={closeMenu}>How It Works</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100}duration={1000} onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='volunteer' spy={true} smooth={true} offset={-100}duration={1000} onClick={closeMenu}>Join us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-150}duration={1000} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar