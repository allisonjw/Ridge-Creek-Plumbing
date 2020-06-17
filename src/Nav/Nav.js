import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
    return (
      <header>
        <div className="header_logo" aria-label="business logo">
          <h1>Ridgecreek</h1>
          <h2 className="nav_h2">Plumbing | Gas</h2>
        </div>
        <nav role="navigation" aria-label="main navigation">
          <ul className="all_navbar_links">
            <li className="navbar_item">
                <NavLink 
                activeClassName="navlink-is_active" 
                className="navlink_normal"
                to="/about"
                >
                About
                </NavLink>
            </li>
            <li className="navbar_item">      
                <NavLink 
                activeClassName="navlink-is_active" 
                className="navlink_normal"
                to="/portfolio"
                >
                    Portfolio
                </NavLink>
            </li>
            <li className="navbar_item">       
                <NavLink  
                activeClassName="navlink-is_active" 
                className="navlink_normal"
                to="/services"
                >
                    Services
                </NavLink>
            </li>
            <li className="navbar_item">      
                <NavLink 
                activeClassName="navlink-is_active" 
                className="navlink_normal"
                to="/contact"
                >
                    Contact
                </NavLink>
            </li>   
        </ul>
      </nav>
      </header>
    )
};

export default Nav;