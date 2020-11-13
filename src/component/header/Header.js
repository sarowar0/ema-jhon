import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <div className="container">
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order review</Link>
                    <Link to="/manage">Order manage</Link>
                    <button onClick={() => {setLoggedInUser({})}} className='btn btn-small btn-secondary'>Sign out</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;