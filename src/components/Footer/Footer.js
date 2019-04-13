import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="header justify-content-between">
            <div className="footer__copyright">
                Copyright galdranorn 2019
            </div>
            <div className="footer__links">
                <NavLink 
                    className="footer__links--link"
                    activeClassName="footer__links--active" 
                    exact to="/">
                    Home
                </NavLink>
                <NavLink 
                    className="footer__links--link"
                    activeClassName="footer__links--active" 
                    exact to="/faq">
                    FAQ
                </NavLink>
                <NavLink 
                    className="footer__links--link"
                    activeClassName="footer__links--active" 
                    exact to="/rules">
                    Rules
                </NavLink>
                <NavLink 
                    className="footer__links--link"
                    activeClassName="footer__links--active" 
                    exact to="/contact">
                    Contact
                </NavLink>
                <NavLink 
                    className="footer__links--link"
                    activeClassName="footer__links--active" 
                    exact to="/basket">
                    Basket
                </NavLink>
            </div>
        </div>
    )
}