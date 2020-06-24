import React from 'react';
import './Categories.scss';
import Projects from '../Projects/Projects';
import '../Portfolio/Portfolio.scss';
import Portfolio from '../Portfolio/Portfolio';

export const Categories = ({ pickedType, type, allProjectsArray }) => {

  if (type === 'all') {
    const allCategoriesArrayList = allProjectsArray.map(project => <Projects key={project.id} {...project} />);
    return (
      <>
        <section className="portfolio_main">
          <Portfolio allCats={allCategoriesArrayList} />
        </section>
      </>
    )
   } else {
    const projectList = pickedType.map(project => <Projects key={project.id} {...project} />);
      return (
        <>
          <section className="portfolio_main">
            <Portfolio projectList={projectList} />
          </section>
        </>
      )
    };
  };    
 
export default Categories;