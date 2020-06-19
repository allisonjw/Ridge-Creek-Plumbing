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
            <h2 className="about_h2-why">Why Ridgecreek</h2>
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
        <Fade bottom>
        <section className="section_about-mission">
            <h2 className="about_h2">Mission Statement</h2>
            <p className="about_paragraph">
              We are interested in learning about your plumbing and hydronic projects. Our goal is to be your reliable partner in projects of any scope and size. We look forward to working with you.
            </p>
        </section>
        </Fade>
        <aside className="aside_testimonial">
          <h2 className="about_h2">Testimonials</h2>
          <p className="testimonials_description">Our focus is meeting your goals and providing the best customer service possible. See what some of our valued clients are saying about us.</p>
        </aside>
        <section className="section_about-testimonials">
          <input id="go1" type="radio" name="select" className="input" checked/>
          <input id="go2" type="radio" name="select" className="input"checked/>
          <input id="go3" type="radio" name="select" className="input" checked/>
          <input id="go4" type="radio" name="select" className="input"checked/>
	     <figure className="about_testimonials">
		   <figure className="testimonial" id="p1">
			<p className="testimonial_content">"Garth and his team at RidgeCreek has been there for me multiple times for projects (and one homeowner caused emergency) and I’ve been incredibly impressed with their responsiveness and attention to detail. Although they work on large commercial projects, they treated mine like it was just as important.  I would highly recommend them for any plumbing project."<br></br>~ Chris Olympia, WA</p>
			<label for="go2" className="btn btn-inside next">›</label>
		  </figure>
		  <figure className="testimonial" id="p2">
			<p className="testimonial_content">"lorem ipsum testimonial two"</p>
			<label for="go1" className="btn btn-inside prev">‹</label>
			<label for="go3" className="btn btn-inside next">›</label>
		  </figure>
		  <figure className="testimonial" id="p3">
			<p className="testimonial_content">"Lorem ipsum testimonial 3"</p>
			<label for="go2" className="btn btn-inside prev">‹</label>
			<label for="go4" className="btn btn-inside next">›</label>
		  </figure>
          <figure className="testimonial" id="p4">
			<p className="testimonial_content">"lorem ipsum testimonial 4"</p>
			<label for="go3" className="btn btn-inside prev">‹</label>
			<label for="go1" className="btn btn-inside next">«</label>
		  </figure>
	    </figure>
          <label for="go1" className="btn btn-outside go1">1</label>
          <label for="go2" className="btn btn-outside go2">2</label>
          <label for="go3" className="btn btn-outside go3">3</label>
          <label for="go4" className="btn btn-outside go4">4</label>
        </section>
      </main>
    )
};

export default About;