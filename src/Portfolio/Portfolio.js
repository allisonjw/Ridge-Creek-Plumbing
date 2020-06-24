import React from 'react';
import './Portfolio.scss';
import { Projects } from '../Projects/Projects';
import portfolioImage from '../images/Laurana_Article_Image.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export const Portfolio = () => {

    return (
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
          <ul className="portfolio_navigation-bar">
            <li 
               className="portfolio_nav-li">
                <Link 
                  // type="submit"
                  activeStyle="portfolio_link-is_active"
                  className="portfolio_link-normal"
                  to={"/all"}>
                    ALL
                </Link>
            </li>
            <li 
              className="portfolio_nav-li">
                <Link
                  // type="submit"
                  // activeStyle="portfolio_link-is_active"
                  className="portfolio_link-normal"
                  to="projects/residential">
                    RESIDENTIAL
                </Link>
            </li>
            <li 
              className="portfolio_nav-li">
                <Link
                  // type="submit"
                  // activeStyle="portfolio_link-is_active"
                  className="portfolio_link-normal"
                  to="projects/commercial">
                    COMMERCIAL
                </Link>
            </li>
            <li 
               className="portfolio_nav-li">
                <Link
                  // type="submit"
                  // activeStyle="portfolio_link-is_active"
                  className="portfolio_link-normal"
                  to="projects/mixedUse">
                    MIXED USE
                </Link>
            </li>
            <li 
               className="portfolio_nav-li">
                <Link
                  // type="submit"
                  // activeStyle="portfolio_link-is_active"
                  className="portfolio_link-normal"
                  to="projects/hospitality">
                    HOSPITALITY
                </Link>
            </li>
          </ul> 
          <section className="portfolio_main">
            <Projects />
          </section>     
        </section>
    )
};

export default Portfolio;