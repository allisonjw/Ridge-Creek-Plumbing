import React from 'react';
import Categories from './Categories';
import { shallow } from 'enzyme';

describe('Categories', () => {
    it('should match the snapshot if there is a project type', () => {
        let type = '';
        let pickedType = ['commercial'];
        let allProjectsArray = [{
            id: 1,
            project_type: 'commercial',
            name: 'Puyallup School District',
            location: 'Puyallup, WA',
            image: require('../images/puyallup.jpg'),
        },
        {
            id: 2,
            project_type: 'commercial',
            name: 'The Artisans Group',
            location: 'South Sound Region',
            image: require('../images/artisans.jpg'),
        }];

        const projectWrapper = shallow(
            <Categories 
                type={type}
                pickedType={pickedType}
                allProjectsArray={allProjectsArray}
            />
        );
        expect(projectWrapper).toMatchSnapshot();
    });

    it('should match the snapshot if the type is all', () => {
        let type = 'all';
        let pickedType= [' '];
        let allProjectsArray = [{
            id: 1,
            project_type: 'commercial',
            name: 'Puyallup School District',
            location: 'Puyallup, WA',
            image: require('../images/puyallup.jpg'),
        },
        {
            id: 2,
            project_type: 'commercial',
            name: 'The Artisans Group',
            location: 'South Sound Region',
            image: require('../images/artisans.jpg'),
        }];

        const projectWrapper = shallow(
            <Categories 
                type={type}
                pickedType={pickedType}
                allProjectsArray={allProjectsArray}
            />
        );
        expect(projectWrapper).toMatchSnapshot();
    });
});