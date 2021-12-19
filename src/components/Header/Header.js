//============================Import file and necessary data===================
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo/logo.png';
import './Header.css'

//======================Start header section part===================
const Header = () => {
    return (
        <div>

            <header>
                {/*=============Header logo section===========*/}
                <img src={logo} alt="" />
                {/*-------------Handle Page linking-------------*/}
                <nav>
                    <li><Link className="active" to="/home">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/*-------------End Page Linking---------------*/}
                </nav>

            </header>
            {/*-------------------End Header Section-----------------*/}
        </div>
    );
};

export default Header;