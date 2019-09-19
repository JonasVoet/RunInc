import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Logo from '../NavBar/Logo';
import '../scss/navbar.scss';


const NavBar = () => {
    return (

        <nav className="navbar">
            <div className="logo-img">
                <Logo />
            </div>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/event">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
            <div className="search">
                <input type="text" />
                <button>SEARCH</button>
            </div>
        </nav>
    );
};

export default withRouter(NavBar);