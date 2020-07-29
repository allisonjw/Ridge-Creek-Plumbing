import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import './Footer.scss';

export const Footer = () => {
    return (
      <footer>
          <img className="logo-img" alt="ridge creek plumbing logo" src={require('../images/logo-white.png')}></img>
          <div className="footer_links-holder">
           <Link 
             to="/"       
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
            <p className="footer_quote">We put our customers first!</p>
            <a href="https://www.facebook.com/ridgecreekplumbing/"
              className="footer_socialMedia-img" 
              target="_blank"
              aria-label="link to Facebook" 
              rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="instagram" 
              className="footer_socialMedia-img" 
              target="_blank" 
              aria-label="link to Instagram" 
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="linkedin"
              className="footer_socialMedia-img"  
              target="_blank" 
              aria-label="link to LinkedIn" 
              rel="noopener noreferrer">
              <FaLinkedin />
            </a> 
            <a href="twitter"
              className="footer_socialMedia-img"  
              target="_blank" 
              aria-label="link to Twitter" 
              rel="noopener noreferrer">
              <FaTwitterSquare />
            </a> 
          </div>
      </footer>
    )
};

export default Footer;