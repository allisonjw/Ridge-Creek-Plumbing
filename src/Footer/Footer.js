import React, { useLayoutEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaYelp } from "react-icons/fa";
import './Footer.scss';

export const Footer = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
    return (
      <footer>
          <img className="logo-img" alt="ridge creek plumbing logo" src={require('../images/logo-white.png')}></img>
          <div className="footer_links-holder">
           <Link 
             to="/"
             href="/#about_home"       
             className="footer_link"
           >
               About
           </Link>  
           <Link 
             to="/portfolio"
             id="portfolio_home"       
             className="footer_link"
           >
               Portfolio
           </Link>  
           <Link 
             to="/services"
             id="services_home"       
             className="footer_link"
           >
               Services
           </Link>  
           <Link 
             to="/contact"
             id="contact_home"       
             className="footer_link"
           >
               Contact
           </Link>  
          </div>
            {/* ******* needs active SM accounts from client****** */}            
          <div className="footer_socialMedia-holder">
            <p className="footer_quote">We put our customers first!</p>
            <a href="https://www.facebook.com/ridgecreekplumbing/"
              className="footer_socialMedia-img" 
              target="_blank"
              aria-label="link to Facebook" 
              rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.yelp.com/biz/ridgecreek-plumbing-llc-olympia"
              className="footer_socialMedia-img" 
              target="_blank"
              aria-label="link to Yelp" 
              rel="noopener noreferrer">
              <FaYelp />
            </a>
            <a href="https://www.instagram.com/ridgecreek_plumbing/" 
              className="footer_socialMedia-img" 
              target="_blank" 
              aria-label="link to Instagram" 
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            {/* <a href="linkedin"
              className="footer_socialMedia-img"  
              target="_blank" 
              aria-label="link to LinkedIn" 
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>  */}
            {/* <a href="twitter"
              className="footer_socialMedia-img"  
              target="_blank" 
              aria-label="link to Twitter" 
              rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>  */}
          </div>
      </footer>
    )
};

export default Footer;