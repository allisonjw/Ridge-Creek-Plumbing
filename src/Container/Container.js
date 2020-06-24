import React from 'react';
import './Container.scss';
import { Projects } from '../Projects/Projects';
import { allProjects } from '../allData/allData';
import { Route } from 'react-router-dom';

export const Container = () => {
    const newProjectArray = [...allProjects.commercial, ...allProjects.residential, ...allProjects.mixedUse, ...allProjects.hospitality]
    console.log('allProducts', newProjectArray)
    console.log(Object.keys(allProjects))
  
    return (

    )
}

export default Container;