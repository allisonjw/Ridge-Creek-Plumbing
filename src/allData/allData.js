export const allProjects = {
    commercial: [
        {
            //fake commercial project
            id: 1,
            project_type: 'commercial',
            name: 'Company XYZ',
            location: 'Tacoma',
            image: require('../images/Point-Ruston.jpg'),
        },
        {
            id: 2,
            project_type: 'commercial',
            name: 'The Artisans Group',
            location: 'South Sound Region',
            image: require('../images/artisans.jpg'),
        },
        {
            id: 3,
            project_type: 'commercial',
            name: 'Les Schwab Tire Center',
            location: 'Centralia',
            image: require('../images/les_schwab.jpg'),
        },
        {
            id: 4,
            project_type: 'commercial',
            name: 'BP ARCO',
            location: 'South Sound Region',
            image: require('../images/ARCO.jpg'),
        },
        {
            id: 5,
            project_type: 'commercial',
            name: '7-Eleven',
            location: 'South Sound Region',
            image: require('../images/7-eleven.png'),
        }
    ],
    residential: [
        {
            //fake residence
            id: 6,
            project_type: 'residential',
            name: 'Smith Residence',
            location: 'Tacoma',
            image: require('../images/residence_project.jpg'),
        },
        {
            id: 7,
            project_type: 'residential',
            name: 'Gilbert Residence',
            location: 'Olympia',
            image: require('../images/gilbert.jpeg'),
        },
        {
            id: 8,
            project_type: 'residential',
            name: 'Wagner Residence',
            location: 'Olympia',
            image: require('../images/wagner.jpg'),
        }
    ],
    mixedUse: [    
        {
            id: 9,
            project_type: 'mixed-use',
            name: 'The Laurana',
            location: 'Olympia',
            image: require('../images/Laurana_Article_Image.jpg'),
        },
        {
            //fake mixed-use
            id: 10,
            project_type: 'mixed-use',
            name: 'The XYZ',
            location: 'Olympia',
            image: require('../images/xyz.jpg'),
        }
    ],
    hospitality: [
        {
            id: 11,
            project_type: 'hospitality',
            name: 'The Windjammer Hotel',
            location: 'Pacific Beach',
            image: require('../images/windjammer.jpg'),
        },
        {
            //fake hospitality
            id: 12,
            project_type: 'hospitality',
            name: 'XYZ Hotel',
            location: 'Seattle',
            image: require('../images/seattle.jpeg'),
        }
    ]   
};