import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = props => {
    return (
        <div className="footer">
            <p></p>
            <div className="footer--links">
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
            </div>
        </div>
    )
}