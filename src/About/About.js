import React from 'react';
import './About.scss';
import PNW from '../images/PNW_1.jpeg';
import commercial from '../images/commercial_plumbing.jpeg';
import boots from '../images/boots.jpeg';
import plumbing from '../images/plumbing_1.jpeg';
import Fade from 'react-reveal/Fade';

export const About = () => {
    return (
      <main>
        <div className="about_banner" aria-label="slideshow of images">
          <figure>
            <div className="about_img" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${PNW})` }}> 
            </div>
              <figcaption>
                Image of the puget sound in the Pacific Northwest. 
              </figcaption>
            </figure>
            <figure>
              <div className="about_img" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${commercial})` }}> 
              </div>
            <figcaption>
                One of our commercial plumbing projects. 
            </figcaption>
            </figure>
            <figure>
              <div className="about_img" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${boots})` }}> 
              </div>
            <figcaption>
                We work rain or shine.
                </figcaption>
            </figure>
            <figure>
              <div className="about_img" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${plumbing})` }}> 
              </div>
            <figcaption>
                One of our residential jobs in progress.
            </figcaption>
            </figure>
        </div>
        <Fade bottom>
        <section className="section_about-why">
            <h2 className="about_h2">Why Ridgecreek</h2>
            <p className="about_paragraph">
              Whether working with a home owner to replace a plumbing appliance, a landlord to make tenant improvements, or a commercial contractor to install a building’s plumbing and hydronic system, our commitment to quality of service and workmanship is why we are trusted across the South Sound region.

              We are a signatory with United Association Local 26, Plumbers and Pipefitters Union, and we are also a member of the Olympia Master Builders Association. We pride ourselves on our strong relationships with local contractors and suppliers ensuring we are always able to deliver the highest level of service to our clients.
            </p>
        </section>
        </Fade>
        <Fade bottom>
        <section className="section_about-history">
            <h2 className="about_h2">Our History</h2>
            <p className="about_paragraph">
              Ridgecreek Plumbing specializes in residential and commercial plumbing installation, water and gas line repair, re-pipe, remodel, and new construction, serving Olympia, Lacey, Tumwater, and the greater South Sound region.

              Established in 2009, Ridgecreek Plumbing was founded by Garth Magaro, a Journeyman Plumber with nearly two decades experience in commercial and residential work serving corporate, academic, government, and residential customers. With a focus on excellent customer service, safety and code compliance, and a fine attention to detail, we ensure that each job exceeds customer expectations with a dedication to the highest standards of quality.
            </p>
        </section>
        </Fade>
        <section className="section_about-testimonials">
            <h2 className="about_h2">Testimonials</h2>
            <ul class="slideTab">
                <li><a className="testimonials_a" href="#slideContentChild-01">Page 01</a></li>
                <li><a className="testimonials_a" href="#slideContentChild-02">Page 02</a></li>
                <li><a className="testimonials_a" href="#slideContentChild-03">Page 03</a></li>
                <li><a className="testimonials_a" href="#slideContentChild-04">Page 04</a></li>
                <li><a className="testimonials_a" href="#slideContentChild-05">Page 05</a></li>
                <li><a className="testimonials_a" href="#slideContentChild-06">Page 06</a></li>
            </ul>
            <ul className="about_testimonials-ul">
              <li className="testimonials_li" id="slideContentChild-01">"The Laurana, mixed use building new construction, Downtown Olympia"</li>
              <li className="testimonials_li" id="slideContentChild-02">"The Windjammer Hotel, bathroom remodels, Pacific Beach"</li>
              <li className="testimonials_li" id="slideContentChild-03">"Les Schwab Tire Center, new construction, Centralia"</li>
              <li className="testimonials_li" id="slideContentChild-04">"The Artisans Group, custom passive homes, South Sound Region"</li>
              <li className="testimonials_li" id="slideContentChild-05">"BP ARCO, gas station new construction, South Sound Region"</li>
              <li className="testimonials_li" id="slideContentChild-06">"7-Eleven, new construction, South Sound Region"</li>
            </ul>
        </section>
        <Fade bottom>
        <section className="section_about-mission">
            <h2 className="about_h2">Mission Statement</h2>
            <p className="about_paragraph">
              We are interested in learning about your plumbing and hydronic projects. Our goal is to be your reliable partner in projects of any scope and size. We look forward to working with you.
            </p>
        </section>
        </Fade>
      </main>
    )
};

export default About;