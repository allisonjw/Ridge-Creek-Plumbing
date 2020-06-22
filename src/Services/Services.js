import React from 'react';
import './Services.scss';
import servicesImage from '../images/plumbing-equipment.jpg';

export const Services = () => {
    return (
      <section className="section_services">
        <div className="services_banner" 
        aria-label="notification of services page">
          <div className="services_img" aria-label="" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${servicesImage})` }}>
            <h2 className="services_banner-h2">
              Our Services
            </h2>
          </div>
        </div> 
        <section className="services_body">
          <article className="services_article">
            <aside className="services_img-holder">
              <img src="" alt="" className="services_image"></img>
            </aside>
            <aside className="services_description-holder">
              <h3 className="services_h3"></h3>
              <p className="services_paragraph"></p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_img-holder-1">
              <img src="" alt="" className="services_image-1"></img>
            </aside>
            <aside className="services_description-holder-1">
              <h3 className="services_h3">Plumbing</h3>
              <p className="services_paragraph"></p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_img-holder-2">
              <img src="" alt="" className="services_image-2"></img>
            </aside>
            <aside className="services_description-holder-2">
              <h3 className="services_h3">Remodeling</h3>
              <p className="services_paragraph"></p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_img-holder-3">
              <img src="" alt="" className="services_image-3"></img>
            </aside>
            <aside className="services_description-holder-3">
              <h3 className="services_h3">Re-piping</h3>
              <p className="services_paragraph"></p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_img-holder-4">
              <img src="" alt="" className="services_image-4"></img>
            </aside>
            <aside className="services_description-holder-4">
              <h3 className="services_h3">Water and Gas</h3>
              <p className="services_paragraph"></p>
            </aside>
          </article>
        </section>     
      </section>
    )
};

export default Services;