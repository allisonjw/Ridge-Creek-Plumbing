import React from 'react';
import './Services.scss';
import servicesImage from '../images/plumbing-equipment.jpg';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal'

export const Services = () => {
    
  return (
      <section className="section_services">
      <Fade left>
        <div className="services_banner" 
        aria-label="notification of services page">
          <div className="services_img" aria-label="" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${servicesImage})` }}>
            <h2 className="services_banner-h2">
              Our Services
            </h2>
          </div>
        </div> 
        </Fade>
        <p className="services_description-paragraph">For light commercial projects, tenant improvement projects and larger commercial and industrial projects, as a signatory to the Local 26 Plumbers and Pipefitters Union, we have access to a pool of trained and skilled plumbers who can assist with any plumbing project. Visit Local 26's
          <a 
            href="http://www.ua26.org/"
            target="_blank" 
            className="services_union-link"
            aria-label="link to Local Union 26's website"
            rel="noopener noreferrer">
              website
          </a>
        <br></br>
        <br></br>
        Local 26 is part of a National Plumbers and Pipefitters Union. Additional information about the National UA can be found 
          <a 
            href="http://www.ua.org/"
            target="_blank" 
            className="services_union-link"
            aria-label="link to National Plumber's website"
            rel="noopener noreferrer">
              here
          </a>
        </p>
        <section className="services_body">
          <article className="services_article">
          <Reveal effect="pulse">
            <aside className="services_img-holder-1">
              <img src={require("../images/plumbing-585658_640.png")} alt="plumbing tools" className="services_image-1"></img>
            </aside>
          </Reveal>
            <aside className="services_description-holder-1">
              <h3 className="services_h3">Plumbing</h3>
              <p className="services_paragraph">We offer a diverse range of plumbing products for installation in your home. No job is too big or small for our team. Perhaps you don’t like your master bath sink faucet because it’s grimy and fails to match the rest of the décor. We can swap it out for one of your choosing. You can also rely on our plumbers for major plumbing installation jobs like a new water heater or a replacement water line. We’re here for you when you need us.</p>
            </aside>
          </article>
          <article className="services_article responsive_article-style">
            <aside className="services_description-holder-2">
              <h3 className="services_h3">Remodeling</h3>
              <p className="services_paragraph">Remodeling your house can renew your enjoyment and love for your home. At Ridgecreek, we believe in making the process just as positive as the outcome. Every project we take on exhibits the artistry and quality you demand. Because we manage the job from start to finish, your experience will be both efficient and enjoyable.</p>
            </aside>
          <Reveal effect="pulse">
            <aside className="services_img-holder-2">
              <img src={require("../images/construction.png")} alt="tools for construction work" className="services_image-2"></img>
            </aside>
          </Reveal>
          </article>
          <article className="services_article">
          <Reveal effect="pulse">
            <aside className="services_img-holder-3">
              <img src={require("../images/copper-pipe.png")} alt="copper piping for plumbing" className="services_image-3"></img>
            </aside>
          </Reveal>
            <aside className="services_description-holder-3">
              <h3 className="services_h3">Re-piping</h3>
              <p className="services_paragraph">If you notice failures in your plumbing system in different areas of the home, or it seems as though you’re constantly on the phone with the plumber to repair your piping, then re-piping may be your best bet. When you work with our expert plumbers, we can give you all the information and advice you need to make an informed decision.</p>
            </aside>
          </article>
          <article className="services_article responsive_article-style">
            <aside className="services_description-holder-4">
              <h3 className="services_h3">Water and Gas</h3>
              <p className="services_paragraph">Whether you have a new water heater or an older water heater, proper and routine water heater maintenance is something you can do to extend its life, minimize costs for repair and replacement, and lower your energy costs.</p>
            </aside>
          <Reveal effect="pulse">
            <aside className="services_img-holder-4">
              <img src={require("../images/appliance-gas.png")} alt="gas flame from a stove" className="services_image-4"></img>
            </aside>
          </Reveal>
          </article>
        </section>     
      </section>
    )
};

export default Services;