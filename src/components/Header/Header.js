import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <div className="header justify-content-between">
            <div className="header__logo">
                PLANT SHOP
                </div>
            <div className="header__links">
                <NavLink
                    className="header__links--link"
                    activeClassName="header__links--active"
                    exact to="/">
                    Home
                </NavLink>
                <NavLink
                    className="header__links--link"
                    activeClassName="header__links--active"
                    exact to="/faq">
                    FAQ
                </NavLink>
                <NavLink
                    className="header__links--link"
                    activeClassName="header__links--active"
                    exact to="/rules">
                    Rules
                </NavLink>
                <NavLink
                    className="header__links--link"
                    activeClassName="header__links--active"
                    exact to="/contact">
                    Contact
                </NavLink>
                <NavLink
                    className="header__links--link"
                    activeClassName="header__links--active"
                    exact to="/cart">
                    Cart
                </NavLink>
            </div>
        </div>
    )
}