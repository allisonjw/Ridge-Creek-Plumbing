import React from 'react';
import './Projects.scss';
// import Fade from 'react-reveal/Fade';

export const Projects = () => {
    return (
          <article className="project">
            <div 
              className="reveal-content" 
              aria-label="holds image that is revealed on hover">
            <img 
                 src={require('../images/Laurana_Article_Image.jpg')}
                 alt="business storefront in Olympia"
                 className="project_reveal-img">
               </img>
            </div>
            <div 
              className="reveal-top" 
              aria-label="name of project that is displayed when not being hovered">
              <div 
                className="reveal-content caption" aria-label="title of project that is displayed on page load">
                  <h4 className="project_reveal-h4">The Laurana</h4>
              </div>
           </div>
          </article>
    )
};

export default Projects;