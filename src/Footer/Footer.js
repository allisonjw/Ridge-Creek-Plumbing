import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
    return (
      <footer>
          <div className="footer_logo-holder">
          <img className="logo-img" alt="ridge creek plumbing logo" src={require('../images/logo.png')}></img>
          </div>
          <div className="footer_links-holder">
           <Link to="/about">
             <button className="footer_link"
             >
               About
             </button>
           </Link>  
           <Link to="/portfolio">
             <button className="footer_link"
             >
               Portfolio
             </button>
           </Link>  
           <Link to="/services">
             <button className="footer_link"
             >
               Services
             </button>
           </Link>  
           <Link to="/contact">
             <button className="footer_link"
             >
               Contact
             </button>
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