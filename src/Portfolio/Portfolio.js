import React from 'react';
import './Portfolio.scss';
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
                activeClassName="portfolio_link-is_active"
                className="portfolio_link-normal"
                to="#">
                  ALL
              </Link>
          </li>
          <li 
            className="portfolio_nav-li">
              <Link
                activeClassName="portfolio_link-is_active"className="portfolio_link-normal"
                to="#">
                  RESIDENTIAL
              </Link>
          </li>
          <li 
            className="portfolio_nav-li">
              <Link
                activeClassName="portfolio_link-is_active"className="portfolio_link-normal"
                to="#">
                  COMMERCIAL
              </Link>
          </li>
          <li 
             className="portfolio_nav-li">
              <Link
                activeClassName="portfolio_link-is_active"className="portfolio_link-normal"
                to="#">
                  MIXED USE
              </Link>
          </li>
          <li 
             className="portfolio_nav-li">
              <Link
                activeClassName="portfolio_link-is_active"className="portfolio_link-normal"
                to="#">
                  HOSPITALITY
              </Link>
          </li>
        </ul> 
        <section className="portfolio_main">
          <article className="project">
            <div 
              className="reveal-content" 
              aria-label="holds image that is revealed on hover">
            <img 
                 src={require('../images/Laurana_Article_Image.jpg')}
                 alt="business storefront in Olympia"
                 className="project_reveal-img">
               </img>
            </div>
            <div 
              className="reveal-top" 
              aria-label="name of project that is displayed when not being hovered">
              <div 
                className="reveal-content caption" aria-label="title of project that is displayed on page load">
                  <h4 className="project_reveal-h4">The Laurana</h4>
              </div>
           </div>
          </article>
          <article className="project"></article>
          <article className="project"></article>
          <article className="project"></article>
          <article className="project"></article>
          <article className="project"></article>
          <article className="project"></article>
          <article className="project"></article>
        </section>     
      </section>
    )
};

export default Portfolio;