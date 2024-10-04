import React, {useState} from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='little lemon logo' />
            </a>

            {/*mobile view*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/*nav items*/}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <Link to='/booking'>Reservation</Link>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;