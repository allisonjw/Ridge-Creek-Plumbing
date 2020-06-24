import React from 'react';
import './Projects.scss';
// import Fade from 'react-reveal/Fade';

export const Projects = ({ id, product_type, name, location, image }) => {
  console.log('prj', product_type)
  // let match = useRouteMatch("/projects/:type")
  return (
    <article className="project">
            <div 
              className="reveal-content" 
              aria-label="holds image that is revealed on hover">
                <object 
                  className='project_reveal-img' 
                  data={image} 
                  type='image/jpg' 
                  alt={name}>
                  <img 
                    className='project_reveal-img' 
                    src={require('../images/cline.jpg')} alt='default' />
              </object>
            </div>
            <div 
              className="reveal-top" 
              aria-label="name of project that is displayed when not being hovered">
              <div 
                className="reveal-content caption" aria-label="title of project that is displayed on page load">
                  <h4 className="project_reveal-h4">{name}</h4>
              </div>
           </div>
          </article>
    )
};

export default Projects;