import React from 'react';
import './Portfolio.scss';
import portfolioImage from '../images/Laurana_Article_Image.jpg';

export const Portfolio = () => {
    return (
      <section className="section_portfolio">
        <div className="portfolio_banner" 
        aria-label="notification of portfolio page">
          <div className="portfolio_img" aria-label="" style={{ backgroundImage:`linear-gradient(rgba(255, 252, 252, 0.25), rgba(255, 254, 254, 0.15)), url(${portfolioImage})` }}>
            <h2 className="portfolio_banner-h2">
              Portfolio
            </h2>
          </div>
        </div>
        <ul className="portfolio_navigation-bar">
          <li 
             className="portfolio_nav-li"
             activeClassName="portfolio_link-active">
              ALL
          </li>
          <li 
            activeClassName="portfolio_link-active" className="portfolio_nav-li">
              RESIDENTIAL
          </li>
          <li 
            activeClassName="portfolio_link-active" className="portfolio_nav-li">
              COMMERCIAL
          </li>
          <li 
            activeClassName="portfolio_link-active" className="portfolio_nav-li">
              MIXED-USE
          </li>
          <li 
            activeClassName="portfolio_link-active" className="portfolio_nav-li">
              HOSPITALITY
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