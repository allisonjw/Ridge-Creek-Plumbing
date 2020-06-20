import React from 'react';
import './Services.scss';
import servicesImage from '../images/plumbing-equipment.jpg';

export const Services = () => {
    return (
      <section className="section_services">
        <div className="services_banner" 
        aria-label="notification of services page">
          <div className="services_img" aria-label="" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${servicesImage})` }}>
            <h2 className="portfolio_banner-h2">
              Services
            </h2>
          </div>
        </div>      
      </section>
    )
};

export default Services;