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
      </section>
    )
};

export default Portfolio;