import React from 'react';
import Projects from './Projects';
import { shallow } from 'enzyme';

describe('Projects', () => {
    it('should match the snapshot', () => {
        let project_type = 'commercial';
        let name = 'Puyallup School District';
        let location = 'Puyallup, WA';
        let image = '../images/puyallup.jpg';

        const projectWrapper = shallow(
            <Projects 
                project_type={project_type}
                name={name}
                location={location}
                image={image}
            />
        );

    expect(projectWrapper).toMatchSnapshot();
  });
});