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
            <hr className="about_h2-underline"></hr>
            <p className="about_paragraph">
              Whether working with a home owner to replace a plumbing appliance, a landlord to make tenant improvements, or a commercial contractor to install a building’s plumbing and hydronic system, our commitment to quality of service and workmanship is why we are trusted across the South Sound region.
              <br></br>
              <br></br>
              We are a signatory with United Association Local 26, Plumbers and Pipefitters Union, and we are also a member of the Olympia Master Builders Association. We pride ourselves on our strong relationships with local contractors and suppliers ensuring we are always able to deliver the highest level of service to our clients.
            </p>
        </section>
        <section className="section_about-history">
            <h2 className="about_h2">Our History</h2>
            <hr className="about_h2-underline"></hr>
            <p className="about_paragraph">
              Established in 2009, Ridgecreek Plumbing was founded by Garth Magaro, a Journeyman Plumber with nearly two decades experience in commercial and residential work serving corporate, academic, government, and residential customers. With a focus on excellent customer service, safety and code compliance, and a fine attention to detail, we ensure that each job exceeds customer expectations with a dedication to the highest standards of quality.
              <br></br>
              <br></br>
              One of the things that makes Ridgecreek Plumbing, LLC unique is that Garth's education, training, and experience has helped shape Ridgecreek Plumbing into a business that offers a wide range of mechanical services. From residential service and repair for homeowners, to light commercial and tenant improvement projects for small business owners and landlords, to commercial and industrial projects for general contractors, our plumbers are skilled to do it all.
            </p>
        </section>
        <section className="section_about-mission">
            <h2 className="about_h2">Mission Statement</h2>
            <hr className="about_h2-underline"></hr>
            <p className="about_paragraph">
            For our homeowner clients, one of the most important things we can offer, at no cost, is reliable information and resources for them to learn about hiring contractors and protecting their rights.  A contractor who is licensed, bonded and insured can often provide a high quality of workmanship and ensure adequate protections for homeowners.  
            <br></br>
            <br></br>
            Washington State's Department of Labor and Industries is responsible for overseeing contractors and the following links are great resources for homeowners:
              <br></br>
            </p>  
              <ul 
                className="mission_links-holder" aria-label="container to hold links for customer education">
                  <li className="about_li">This
                <a 
                  href="https://secure.lni.wa.gov/verify/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="about_mission-links">
                    link 
                </a>provides a tool for the general public to verify a contractor</li>
                <li className="about_li">This
                <a 
                  href="https://www.lni.wa.gov/licensing-permits/contractors/hiring-a-contractor/protect-my-home"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="about_mission-links">
                     link
                </a>provides information about the risks one assumes when hiring someone who is not a contractor</li>
                <li className="about_li">This
                <a 
                  href="https://www.lni.wa.gov/licensing-permits/contractors/hiring-a-contractor/hire-smart-step-by-step"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="about_mission-links">
                    link
                </a>provides information about hiring a contractor</li>
                <li className="about_li">This
                <a 
                  href="https://lni.wa.gov/licensing-permits/contractors/problems-with-a-contractor/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="about_mission-links">
                    link
                </a>provides information about what to do if you have problems with a contractor</li>
              </ul>
        </section>
        </Fade>
        <aside className="aside_testimonial">
          <h2 className="about_h2">Testimonials</h2>
          <hr className="about_testimonial-underline"></hr>
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
			<label htmlFor="go2" className="btn btn-inside next">›</label>
		  </figure>
		  <figure className="testimonial" id="p2">
			<p className="testimonial_content">"These guys are top quality.  They fixed my faulty pipes and hot water system that caused water damage.  The insurance company selected them for me, and the insurance company doesn't mess around, only select competent people.  They were gentlemen the whole time."<br></br>~ Stan Gig Harbor, WA</p>
			<label htmlFor="go1" className="btn btn-inside prev">‹</label>
			<label htmlFor="go3" className="btn btn-inside next">›</label>
		  </figure>
		  <figure className="testimonial" id="p3">
			<p className="testimonial_content">"I have used Ridgecreek a few times. They are my go to Plumber and do fantastic work. The owner, Garth, is a great person to work with.  They are responsive, knowledgable, honest, courteous, and very reasonably priced.  Their workmanship is high quality.  I strongly recommend them."<br></br>~ Lauren, Olympia WA</p>
			<label htmlFor="go2" className="btn btn-inside prev">‹</label>
			<label htmlFor="go4" className="btn btn-inside next">›</label>
		  </figure>
          <figure className="testimonial" id="p4">
			<p className="testimonial_content">"Pellentesque habitant morbi tristique senectus et netus. Faucibus a pellentesque sit amet porttitor eget. Sit amet volutpat consequat mauris nunc congue nisi. Augue lacus viverra vitae congue eu consequat. Libero justo laoreet sit amet cursus sit."<br></br>~ Mary Olympia, WA</p>
			<label htmlFor="go3" className="btn btn-inside prev">‹</label>
			<label htmlFor="go1" className="btn btn-inside next">«</label>
		  </figure>
	    </figure>
          <label htmlFor="go1" className="btn btn-outside go1">1</label>
          <label htmlFor="go2" className="btn btn-outside go2">2</label>
          <label htmlFor="go3" className="btn btn-outside go3">3</label>
          <label htmlFor="go4" className="btn btn-outside go4">4</label>
        </section>
        {/* </Fade> */}
      </main>
    )
};

export default About;