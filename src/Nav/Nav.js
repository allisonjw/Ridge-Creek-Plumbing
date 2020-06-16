import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
    return (
      <nav role="navigation" aria-label="main navigation">
        <p>
          Navbar
        </p>
        <NavLink 
          className="navbar_item" 
          activeClassName="is_active" 
          to="/about"
          >
          About
        </NavLink>
        <NavLink 
          className="navbar_item" 
          activeClassName="is_active" 
          to="/portfolio"
          >
            portfolio
        </NavLink>
        <NavLink 
          className="navbar_item" 
          activeClassName="is_active" 
          to="/services"
          >
            Services
        </NavLink>
        <NavLink 
          className="navbar_item" 
          activeClassName="is_active" 
          to="/contact"
          >
            Contact
        </NavLink>
      </nav>
    )
};

export default Nav;