import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = props => {
    return (
        <div className="header justify-content-between">
            <div className="header--logo">
                PLANT SHOP
            </div>
            <div className="header--links">
                <NavLink exact to="/home" activeClassName="activeLink">
                    Home
                </NavLink>
                <NavLink exact to="/faq" activeClassName="activeLink">
                    FAQ
                </NavLink>
                <NavLink exact to="/rules" activeClassName="activeLink">
                    Rules
                </NavLink>
                <NavLink exact to="/contact" activeClassName="activeLink">
                    Contact
                </NavLink>
                <NavLink exact to="/basket" activeClassName="activeLink">
                    Basket
                </NavLink>
            </div>
        </div>
    )
}