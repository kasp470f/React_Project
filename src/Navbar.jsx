import React from 'react';
import './stylesheet.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <div id="logo">Dungeon Loot Web-Shop</div>
                <div className="redirects">
                    <ul>
                        <Link to='/'><li><span>Loot</span></li></Link>
                    </ul>
                </div>
                <Link to='/cart'>
                    <div className="shopping_cart">
                        <span>Basket 🛒</span>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
