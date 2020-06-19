import React from 'react';
import './Contact.scss';
import contactImage from '../images/boots_gloves.jpeg';

export const Contact = () => {
    return (
      <section className="section_contact">
        <div className="contact_banner" 
        aria-label="notification of contact page">
          <div className="contact_img" aria-label="picture of hard hat and boots" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${contactImage})` }}>
            <h2 className="contact_banner-h2">
              Contact Us
            </h2>
          </div>
        </div>
        <section className="contact_body">
          <div className="location_div" aria-label="container for location information">
            <h3 className="contact_h3">LOCATION</h3>
            <p className="contact_address-paragraph">
              1234 Main Street
              <br></br>
              Olympia, WA 98502
            </p>
          </div>
          <div className="email_div" aria-label="container for contact email">
            <h3 className="contact_h3">EMAIL</h3>
            <a    
              href="mailto:Ridgecreekplumbingllc@gmail.com" 
              target="_blank" 
              className="contact_link"
              aria-label="email address"
              rel="noopener noreferrer">
              Ridgecreekplumbingllc@gmail.com
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
      </section>
    )
};

export default Contact;