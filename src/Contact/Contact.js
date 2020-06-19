import React from 'react';
import './Contact.scss';
import contactImage from '../images/boots_gloves.jpeg';

export const Contact = () => {
    return (
      <section className="section_contact">
        <div className="contact_banner" 
        aria-label="notification of contact page">
          <div className="contact_img" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${contactImage})` }}>
            <h2 className="contact_banner-h2">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
    )
};

export default Contact;