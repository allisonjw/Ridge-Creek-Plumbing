import React from 'react';
import './Container.scss';
import Categories from '../Categories/Categories';
import { allProjects } from '../allData/allData';
import { Route } from 'react-router-dom';

export const Container = () => {
    const allProjectsArray = [...allProjects.commercial, ...allProjects.residential, ...allProjects.mixedUse, ...allProjects.hospitality];
    
    return (
        <>
          <Route exact path='/projects/:type' render={({match}) => {
            let projectType = Object.keys(allProjects).find(type => type === match.params.type)
          return <> <Categories pickedType={allProjects[projectType]} /> </>}}/>  
          <Route exact path='/all' render={() => <> <Categories type='all' allProjectsArray={allProjectsArray} /> </>} /> 
        </>   
    )
};

export default Container;