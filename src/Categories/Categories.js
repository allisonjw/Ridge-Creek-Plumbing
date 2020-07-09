import React from 'react';
import './Categories.scss';
import Projects from '../Projects/Projects';
import '../Portfolio/Portfolio.scss';
import Portfolio from '../Portfolio/Portfolio';
import Container from '../Container/Container';

export const Categories = ({ pickedType, type, allProjectsArray }) => {

  if (type === 'all') {
    const allCategoriesArrayList = allProjectsArray.map(project => <Projects key={project.id} {...project} />);
    return (
      <>
          <Portfolio allCats={allCategoriesArrayList} />
          <Container />
      </>
    )
   } else {
    const projectList = pickedType.map(project => <Projects key={project.id} {...project} />);
      return (
        <>
            <Portfolio projectList={projectList} />
            <Container />
        </>
      )
    };
  };    
 
export default Categories;