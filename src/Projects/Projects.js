import React from 'react';
import './Projects.scss';
// import Fade from 'react-reveal/Fade';

export const Projects = ({ id, name, image, location, project_type }) => {
  console.log('image', image)
  return (
    <article className="project">
            <div 
              className="reveal-content" 
              aria-label="holds image that is revealed on hover">
                  <img 
                     src={image}
                     alt={name}
                     className="project_reveal-img">
                  </img>
            </div>
            <div 
              className="reveal-top" 
              aria-label="name of project that is displayed when not being hovered">
              <div 
                className="reveal-content caption" aria-label="title of project that is displayed on page load">
                  <h4 className="project_reveal-h4-name">{name}</h4>
                  <h4 className="project_reveal-h4-location">{location}</h4>
              </div>
           </div>
          </article>
    )
};

export default Projects;