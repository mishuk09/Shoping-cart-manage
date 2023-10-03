import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Make sure the CSS file path is correct

const Navbar = () => {
    return (
        <div className='cart'>

            <div className="link">
                <Link to="/" >Shop</Link>
                <Link to="/Cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>

            </div>

        </div>
    );
};

export default Navbar;
