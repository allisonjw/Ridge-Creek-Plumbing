import React from 'react';
import './Categories.scss';
import { Projects } from '../Projects/Projects';
import '../Portfolio/Portfolio.scss';

export const Categories = ({ pickedType, type, allProjectsArray }) => {
console.log('port', pickedType)
console.log('type', type)
console.log('all', allProjectsArray)
  if (type === 'all') {
    const allCategoriesArrayList = allProjectsArray.map(project => <Projects key={project.id} {...project} />);
    return (
      <>
        <section className="portfolio_main">
          {allCategoriesArrayList}
        </section>
      </>
    )
   } else {
    const projectList = pickedType.map(project => <Projects key={project.id} {...project} />);
      return (
        <>
          <section className="portfolio_main">
            {projectList}
          </section>
        </>
      )
    };
  };    
 
export default Categories;