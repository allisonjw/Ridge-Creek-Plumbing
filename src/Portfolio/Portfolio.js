import React from 'react';
import './Portfolio.scss';
import portfolioImage from '../images/Laurana_Article_Image.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export const Portfolio = ({ allCats, projectList }) => {

    return (
      <>
        <section className="section_portfolio">
          <Fade left>
          <div className="portfolio_banner" 
          aria-label="notification of portfolio page">
            <div className="portfolio_img" aria-label="" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${portfolioImage})` }}>
              <h2 className="portfolio_banner-h2">
                Our Portfolio
              </h2>
            </div>
          </div>
          </Fade>
          <p className="portfolio_description-paragraph">
            Whether working with a home owner to replace a plumbing appliance, a landlord to make tenant improvements, or a commercial contractor to install a building’s plumbing and hydronic system, our commitment to quality of service and workmanship is why we are trusted across the South Sound region. Select a category below to see more information.
          </p>
          <ul className="portfolio_navigation-bar">
            <li 
               className="portfolio_nav-li">
                <Link 
                  activeClassName="link-is_active"
                  className="portfolio_link-normal"
                  to={"/all"}>
                    ALL
                </Link>
            </li>
            <li 
              className="portfolio_nav-li">
                <Link
                  activeClassName="link-is_active"
                  className="portfolio_link-normal"
                  to="/projects/residential">
                    RESIDENTIAL
                </Link>
            </li>
            <li 
              className="portfolio_nav-li">
                <Link
                  activeClassName="link-is_active"
                  className="portfolio_link-normal"
                  to="/projects/commercial">
                    COMMERCIAL
                </Link>
            </li>
            <li 
               className="portfolio_nav-li">
                <Link
                  activeClassName="link-is_active"
                  className="portfolio_link-normal"
                  to="/projects/mixedUse">
                    MIXED USE
                </Link>
            </li>
            <li 
               className="portfolio_nav-li">
                <Link
                  activeClassName="link-is_active"
                  className="portfolio_link-normal"
                  to="/projects/hospitality">
                    HOSPITALITY
                </Link>
            </li>
          </ul> 
        </section>
          <section className="portfolio_main">
            {allCats}
            {projectList}
          </section> 
          </>    
    )
};

export default Portfolio;