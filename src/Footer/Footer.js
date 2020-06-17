import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
    return (
      <footer>
          <img className="logo-img" alt="ridge creek plumbing logo" src={require('../images/logo.png')}></img>
          <div className="footer_links-holder">
           <Link 
             to="/about"       
             className="footer_link"
           >
               About
           </Link>  
           <Link 
             to="/portfolio"
             className="footer_link"
           >
               Portfolio
           </Link>  
           <Link 
             to="/services"
             className="footer_link"
           >
               Services
           </Link>  
           <Link 
             to="/contact"
             className="footer_link"
           >
               Contact
           </Link>  
          </div>
          <div className="footer_socialMedia-holder">
            <p>
                social media
            </p>
          </div>
      </footer>
    )
};

export default Footer;