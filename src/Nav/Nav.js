import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { IoIosFlame } from 'react-icons/io';
import { AiFillTool } from 'react-icons/ai';

export const Nav = () => {
    return (
      <header>
          <div className="nav_banner" aria-label="banner for phone number and email">
            <a 
              href="tel:3604856605" 
              className="nav_banner-link"
              aria-label="phone number">
              360.485.6605
            </a>
            <a    
              href="mailto:garthm@ridgeplumbing.com" 
              target="_blank" 
              className="nav_banner-link"
              aria-label="email address"
              rel="noopener noreferrer">
              garthm@ridgeplumbing.com
            </a>
          </div>
        <div className="header_logo" aria-label="business logo">
        <img className="logo-img" alt="ridge creek plumbing logo" src={require('../images/logo-black.png')}></img>
          <h1>Ridgecreek</h1>
          <h2 className="nav_h2"><span className="nav_img"><AiFillTool/></span>Plumbing | Gas<span className="nav_img"><IoIosFlame/></span></h2>
        </div>
        <nav role="navigation" aria-label="main navigation">
          <ul className="all_navbar_links">
            <li className="navbar_item">
                <NavLink 
                activeClassName="navlink-is_active" 
                className="navlink_normal"
                to="/"
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