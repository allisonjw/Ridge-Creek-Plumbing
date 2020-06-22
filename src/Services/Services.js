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
            <aside className="services_img-holder-1">
              <img src={require("../images/plumbing-585658_640.png")} alt="plumbing tools" className="services_image-1"></img>
            </aside>
            <aside className="services_description-holder-1">
              <h3 className="services_h3">Plumbing</h3>
              <p className="services_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_description-holder-2">
              <h3 className="services_h3">Remodeling</h3>
              <p className="services_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </aside>
            <aside className="services_img-holder-2">
              <img src={require("../images/tools-1183374_640.jpg")} alt="tools for construction work" className="services_image-2"></img>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_img-holder-3">
              <img src={require("../images/copper-pipe.png")} alt="copper piping for plumbing" className="services_image-3"></img>
            </aside>
            <aside className="services_description-holder-3">
              <h3 className="services_h3">Re-piping</h3>
              <p className="services_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </aside>
          </article>
          <article className="services_article">
            <aside className="services_description-holder-4">
              <h3 className="services_h3">Water and Gas</h3>
              <p className="services_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </aside>
            <aside className="services_img-holder-4">
              <img src={require("../images/appliance-gas.png")} alt="gas flame from a stove" className="services_image-4"></img>
            </aside>
          </article>
        </section>     
      </section>
    )
};

export default Services;