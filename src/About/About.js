import React from 'react';
import './About.scss';

export const About = () => {
    return (
      <main>
        <div className="about_banner" role="show slideshow" aria-label="slideshow of images">
          <figure>
            <img 
              className="about_img"
              src={require('../images/PNW_1.jpeg')}
              alt="Pacific Northwest" 
            />
              <figcaption>
                Image of the puget sound in the Pacific Northwest. 
              </figcaption>
            </figure>
            <figure>
              <img 
                className="about_img"
                src={require('../images/commercial_plumbing.jpeg')}
                alt="Commercial plumbing" 
              />
            <figcaption>
                One of our commercial plumbing projects. 
            </figcaption>
            </figure>
            <figure>
              <img 
                className="about_img"
                src={require('../images/boots.jpeg')}
                alt="Dirty boots" 
              />
            <figcaption>
                We work rain or shine.
                </figcaption>
            </figure>
            <figure>
              <img 
                className="about_img"
                src={require('../images/plumbing_1.jpeg')}
                alt="Plumbing work in progress" 
              />
            <figcaption>
                One of our residential jobs in progress.
            </figcaption>
            </figure>
        </div>
        <section className="section_about-why">
            <h2 className="about_h2">Why Ridge Creek</h2>
            <p className="about_paragraph">

            </p>
        </section>
        <section className="section_about-history">
            <h2 className="about_h2">Our History</h2>
            <p className="about_paragraph">

            </p>
        </section>
        <section className="section_about-mission">
            <h2 className="about_h2">Mission Statement</h2>
            <p className="about_paragraph">

            </p>
        </section>
        <section className="section_about-testimonials">
            <h2 className="about_h2">Testimonials</h2>
            <p className="about_paragraph">
                
            </p>
        </section>
      </main>
    )
};

export default About;