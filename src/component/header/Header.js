import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <div className="container">
                    <a href="/shop">Shop</a>
                    <a href="/review">Order review</a>
                    <a href="/manage">Order manage</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;