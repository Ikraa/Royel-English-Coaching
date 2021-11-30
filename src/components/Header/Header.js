import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/logo/logo.png';
import royalLogo from '../../image/logo/royalLogo.jpg';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
        
       <img src={logo} alt="" />

        <nav>
            <li><Link className="active" to="/home">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/about">About</Link></li> 
            
            
        </nav>
        
    </header>
    );
};

export default Header;