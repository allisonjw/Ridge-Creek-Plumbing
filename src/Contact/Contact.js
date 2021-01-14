import React from 'react';
import './Contact.scss';
import contactImage from '../images/boots_gloves.jpeg';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaYelp } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

export const Contact = () => {
    
  return (
      <section className="section_contact">
        <Fade left>
        <div className="contact_banner" 
        aria-label="notification of contact page">
          <div className="contact_img" aria-label="picture of hard hat and boots" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${contactImage})` }}>
            <h2 className="contact_banner-h2">
              Contact Us
            </h2>
          </div>
        </div>
        </Fade>
        <section className="contact_body">
          <div className="location_div" aria-label="container for location information">
            <h3 className="contact_h3">LOCATION</h3>
            <p className="contact_address-paragraph">
              2849 Black Lake Blvd.
              <br></br>
              Olympia, WA 98502
            </p>
          </div>
          <div className="email_div" aria-label="container for contact email">
            <h3 className="contact_h3">EMAIL</h3>
            <a    
              href="mailto:Garthm@ridgecreekplumbing.com" 
              target="_blank" 
              className="contact_link"
              aria-label="email address"
              rel="noopener noreferrer">
              Garthm@ridgecreekplumbing.com
            </a>
          </div>
          <div className="phone_div" aria-label="container for contact telephone number">
            <h3 className="contact_h3">PHONE</h3>
            <a 
              href="tel:3604856605" 
              className="contact_link"
              aria-label="phone number">
              360.485.6605
            </a>
          </div>
        </section>
  {/* ******* needs active SM accounts from client****** */}
  
        <section className="contact_socialMedia">
          <h3 className="social_h3">Contact Us On Social Media</h3>
          <div className="contact_media-holder" aria-label="container for all social media links">
            <a href="https://www.facebook.com/ridgecreekplumbing/"
              className="contact_socialMedia-img" 
              target="_blank" 
              aria-label="link to Facebook"
              rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.yelp.com/biz/ridgecreek-plumbing-llc-olympia"
              className="contact_socialMedia-img" 
              target="_blank" 
              aria-label="link to Yelp"
              rel="noopener noreferrer">
              <FaYelp/>
            </a>
            <a href="https://www.instagram.com/ridgecreek_plumbing/" 
              className="contact_socialMedia-img" 
              target="_blank" 
              aria-label="link to Instagram"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            {/* <a href="linkedin"
              className="contact_socialMedia-img"  
              target="_blank" 
              aria-label="link to LinkedIn"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>  */}
            {/* <a href="twitter"
              className="contact_socialMedia-img"  
              target="_blank" 
              aria-label="link to Twitter"
              rel="noopener noreferrer">
              <FaTwitterSquare />
            </a> */}
          </div>   
        </section>
        <section className="contact_licenses">
          <h3 className="licenses_h3">Licenses and Certifications</h3>
            <p className="license_p">General Contractor License, <strong>RIDGEPL918KD</strong> (State of Washington)</p>
            <p className="license_p">Journeyman Plumbing License, <strong>MAGARG*924LT</strong> (State of Washington)</p>
        </section>
      </section>
    )
};

export default Contact;