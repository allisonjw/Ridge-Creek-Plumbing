import React from 'react';
import './About.scss';

export const About = () => {
    return (
      <main>
        <div className="about_banner" role="show slideshow" aria-label="slideshow of images">
          <figure>
            <img 
              src=""
              alt="" 
            />
            <figcaption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </figcaption>
            </figure>
            <figure>
              <img 
                src=""
                alt="" 
              />
            <figcaption>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
            </figcaption>
            </figure>
            <figure>
              <img 
                src=""
                alt="" 
              />
            <figcaption>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </figcaption>
            </figure>
            <figure>
              <img 
                src=""
                alt="" 
              />
            <figcaption>
                Ut enim ad minima veniam, quis nostrum exercitationem.
            </figcaption>
            </figure>
        </div>
      </main>
    )
};

export default About;